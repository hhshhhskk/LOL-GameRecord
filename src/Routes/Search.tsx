import { useRecoilState } from "recoil";
import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getSummonerId, getRecentRecordRenewal, getChampionMasteryRenewal } from '../api';
import { makeImagePath } from '../utils';
import { summonerNameAtom } from "../atoms"
import { SummonerTier } from "../components/SummonerTier";
import { SummonerMost } from "../components/SummonerMost";
import { RecentRecord } from "../components/RecentRecord";
import { RecentRecordPlus } from "../components/RecentRecordPlus";
import { useEffect, useState } from "react";
import { ChampionMastery } from "../components/ChampionMastery";

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Jua";
`;
const Boards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Board = styled(motion.div)`
  padding: 20px 10px;
  padding-top: 20px;
  background-color: white;
  border-radius: 5px;
  min-height: 200px;
  font-size: 30px;
  color: black;
`;
const SummonerBoard = styled(motion.div)`
  display: flex;
  padding: 20px 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  min-height: 200px;
`;
const SummonerIcon = styled.div`
img {
    width:200px;
    height:200px;
}
`;
const SummonerInfo = styled.div`
    margin-left: 50px;
    flex-direction: row;
`;
const SummonerName = styled.div`
    font-size: 24px;
    color: black;
`;
const SummonerLevel = styled.div`
    text-align: center;
    font-size: 40px;
    color: black;
`;

const RecordRenewalButton = styled.button`
    font-family: "Jua";
    cursor: pointer;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    width: 150px;
    height: 100px;
    color: white;
    background-color: #9cbbf9;
`;

const RecentRecordButton = styled.button`
    cursor: pointer;
    font-size: 15px;
    border: 0;
    background-color: white;
`;

const ChampionMostButton = styled.button`
    cursor: pointer;
    font-size: 15px;
    border: 0;
    background-color: white;
`;

// interface


// Variants
const boardsVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 10,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const boardVariants = {
    start: {
        opacity: 0,

    },
    end: {
        opacity: 1,

    },
}

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const getSummonerName = searchParams.get("keyword");
    const [summonerName, setSummonerName] = useRecoilState<string | null>(summonerNameAtom);
    useEffect(() => {
        setSummonerName(getSummonerName);
    });
    const { data: summonerIdData, isLoading } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], () => getSummonerId(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    // console.log(summonerIdData);

    const [recentClicked, setRecentClicked] = useState(true);
    const [Mostclicked, setMostClicked] = useState(true);
    const recentButtonClicked = () => setRecentClicked((prev) => !prev);
    const mostButtonClicked = () => setMostClicked((prev) => !prev);
    const renewalButtonClicked = () => {
        getRecentRecordRenewal(summonerName);
        getChampionMasteryRenewal(summonerName);
        window.location.reload();
    };

    return (
        <>
            {isLoading
                ?
                <div>Loading...</div>
                :
                recentClicked
                    ?
                    <Wrapper>
                        <Boards variants={boardsVariants} initial="start" animate="end">
                            <SummonerBoard
                                variants={boardVariants}
                            >
                                <SummonerIcon>
                                    <img
                                        src={makeImagePath(summonerIdData?.profileIconId)}
                                        alt="이미지를 불러올 수 없습니다."
                                    />
                                </SummonerIcon>
                                <SummonerInfo>
                                    <SummonerName>
                                        {summonerIdData?.name}
                                    </SummonerName>
                                    <SummonerLevel>
                                        Level.{summonerIdData?.summonerLevel}
                                    </SummonerLevel>
                                    <SummonerName>
                                        <RecordRenewalButton
                                            onClick={renewalButtonClicked}
                                        >전적 갱신</RecordRenewalButton>
                                    </SummonerName>
                                </SummonerInfo>
                            </SummonerBoard>
                            <Board variants={boardVariants}>
                                <SummonerTier />
                            </Board>
                            <Board variants={boardVariants}>
                                {Mostclicked
                                    ?
                                    <>
                                        <div>모스트 3</div>
                                        <ChampionMostButton
                                            onClick={mostButtonClicked}
                                        >
                                            챔피언 숙련도 3
                                        </ChampionMostButton>
                                        <SummonerMost />
                                    </>
                                    :
                                    <>
                                        <div>챔피언 숙련도 3</div>
                                        <ChampionMostButton
                                            onClick={mostButtonClicked}
                                        >
                                            모스트 3
                                        </ChampionMostButton>
                                        <ChampionMastery />
                                    </>
                                }
                            </Board>
                            <AnimatePresence>
                                <Board variants={boardVariants}>
                                    <div>
                                        <span>최근 전적</span>
                                        <RecentRecordButton
                                            onClick={recentButtonClicked}
                                        >
                                            최근 10게임 보기
                                        </RecentRecordButton>
                                    </div>
                                    {recentClicked
                                        ?
                                        <RecentRecord />
                                        : null}
                                </Board>
                            </AnimatePresence>
                        </Boards>
                    </Wrapper >
                    :
                    <RecentRecordPlus setClicked={setRecentClicked} />
            }
        </>
    )

}
export default Search;