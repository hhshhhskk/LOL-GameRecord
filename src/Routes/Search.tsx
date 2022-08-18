import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getSummonerId, getSummonerData, getChampionMost } from '../api';
import { makeImagePath, makeChampionImagePath } from '../utils';
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
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

const ChampionBox = styled(motion.img)`
  background-color: white;
  border-radius: 100px;
  height: 130px;
  font-size: 50px;
  text-align: center;
`;

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
    console.log(summonerMostData);
    return (
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
                    <SummonerName>
                        모스트 3
                        <div>{summonerMostData?.[0]}</div>
                        {[0, 1, 2].map((i) => (
                            <ChampionBox
                                key={i}
                                src={makeChampionImagePath(summonerMostData?.[i])}
                                alt="이미지를 불러올 수 없습니다."
                            ></ChampionBox>
                        ))}
                    </SummonerName>
                </Board>
                <Board variants={boardVariants}>
                    <SummonerName>
                        최근 전적 3
                    </SummonerName>
                </Board>
            </Boards>
        </Wrapper >

    )

}
export default Search;