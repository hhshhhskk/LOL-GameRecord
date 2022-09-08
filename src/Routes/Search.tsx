import { useRecoilState } from "recoil";
import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getSummonerId } from '../api';
import { makeImagePath } from '../utils';
import { summonerNameAtom } from "../atoms"
import { SummonerTier } from "../components/SummonerTier";
import { SummonerMost } from "../components/SummonerMost";
import { RecentRecord } from "../components/RecentRecord";
import { RecentRecordPlus } from "../components/RecentRecordPlus";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
    const { data: summonerIdData } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], () => getSummonerId(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    // console.log(summonerIdData);
    const [clicked, setClicked] = useState(true);
    const toggleClicked = () => setClicked((prev) => !prev);

    return (
        <>
            {clicked
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
                            </SummonerInfo>
                        </SummonerBoard>
                        <Board variants={boardVariants}>
                            <SummonerTier />
                        </Board>
                        <Board variants={boardVariants}>
                            <SummonerMost />
                        </Board>
                        <AnimatePresence>
                            <Board variants={boardVariants}>
                                <div>
                                    <span>최근 전적</span>
                                    <button
                                        onClick={toggleClicked}
                                    >
                                        최근 10게임 보기
                                    </button>
                                </div>
                                {clicked
                                    ?
                                    <RecentRecord />
                                    : null}
                            </Board>
                        </AnimatePresence>
                    </Boards>
                </Wrapper >
                :
                <RecentRecordPlus setClicked={setClicked} />
            }
        </>
    )

}
export default Search;