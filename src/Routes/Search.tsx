import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getSummonerId, getSummonerData, getChampionMost, getRecentRecord } from '../api';
import { makeImagePath, makeChampionImagePath } from '../utils';
import { motion } from "framer-motion";

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
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  min-height: 300px;
`;
const SummonerBoard = styled(motion.div)`
  display: flex;
  padding: 20px 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  min-height: 300px;
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

const SummonerTier = styled.div`
    font-size: 25px;
    color: black;
    text-align: center;
    img {
        width: 200px;
        height: 200px;
    }
`;
const TierImg = styled.div`
`;

const SummonerMost = styled.div`
    flex-direction: row;
    font-size: 30px;
    color: black;
`;
const GameCount = styled.div`
  margin-top: 10%;  
`;
const MostBox = styled.div`
    display: flex;
    margin-top: 10%;
    font-size: 18px;
    gap: 15px;
`;

const ChampionBox = styled(motion.img)`
  border-radius: 100px;
  height: 60px;
`;

const MostTable = styled.table`
  td {
        padding: 7px;
  }
`;

const RecentRecord = styled.div`
    flex-direction: row;
    font-size: 30px;
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
    const summonerName = searchParams.get("keyword");
    const { data: summonerIdData } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], () => getSummonerId(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    // console.log(summonerIdData);
    const { data: summonerInfoData } = useQuery(["lol", "league", "v4", "entries", "by-summoner"], () => getSummonerData(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    //console.log(summonerInfoData);
    const imgUrl = `../ranked-emblems/${summonerInfoData?.tier}.png`;
    // console.log(imgUrl);

    const { data: summonerMostData } = useQuery(["lol"], () => getChampionMost(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    //console.log(summonerMostData);

    const { data: summonerRecentData } = useQuery(["lol", "search"], () => getRecentRecord(summonerName),
        {
            enabled: !!summonerName,
        }
    );

    return (
        <>
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
                        <SummonerTier>
                            <TierImg>
                                <img
                                    className="tierImg"
                                    src={imgUrl}
                                    alt="티어 이미지를 불러올 수 없습니다."
                                />
                            </TierImg>
                            <div>{summonerInfoData?.tier}</div>
                            <span>{summonerInfoData?.wins}승 </span>
                            <span>{summonerInfoData?.losses}패</span>
                        </SummonerTier>
                    </Board>
                    <Board variants={boardVariants}>
                        <SummonerMost>
                            <div>모스트 3</div>
                            {[0, 1, 2].map((i) => (
                                <MostBox key={i}>
                                    <ChampionBox
                                        key={i}
                                        src={makeChampionImagePath(summonerMostData?.[i].champion)}
                                        alt="이미지를 불러올 수 없습니다."
                                    />
                                    <GameCount>{summonerMostData?.[i].count}게임
                                    </GameCount>
                                    <MostTable>
                                        <tbody>
                                            <tr>
                                                <td>KDA</td>
                                                <td>승률</td>
                                            </tr>
                                            <tr>
                                                <td>{summonerMostData?.[i].kda}</td>
                                                <td>{summonerMostData?.[i].winRate}%</td>
                                            </tr>
                                        </tbody>
                                    </MostTable>
                                </MostBox>
                            ))}
                        </SummonerMost>
                    </Board>
                    <Board variants={boardVariants}>
                        <RecentRecord>
                            최근 전적 3
                            {summonerRecentData?.[0].type}
                        </RecentRecord>
                    </Board>
                </Boards>
            </Wrapper >
        </>
    )

}
export default Search;