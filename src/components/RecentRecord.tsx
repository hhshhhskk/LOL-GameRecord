import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getRecentRecord } from '../api';
import { summonerNameAtom } from "../atoms"
import { makeChampionImagePath } from '../utils';

const RecentRecordDiv = styled.div`
    flex-direction: row;
    font-size: 30px;
    color: black;
`;

const RecordWrapper = styled.div`
`;

const GameType = styled.div`
    font-size: 20px;
    background-color: #D5E3FF;
    margin-top: 2%;
    border-radius: 15px 15px 0 0;
    padding: 2%;
`;

const RecordBox = styled.div`
    background-color: #D5E3FF;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    border-radius: 0 0 15px 15px;
    padding-left: 2%;
    padding-bottom: 2%;
`;

const ResultBox1 = styled.div`
    font-size: 30px;
    padding-top: 10%;
    color: blue;
`;
const ResultBox2 = styled.div`
    font-size: 30px;
    padding-top: 10%;
    color: red;
`;

const ChampionBox = styled(motion.img)`
    border-radius: 100px;
    width: 60px;
    height: 60px;
`;

const RecentDataBox = styled.div`
    display: flex;
    padding-top: 10%;
    padding-left: 10%;
`;

const KdaBox = styled.div`
    font-size: 25px;
`;

const GameDate = styled.div`
    padding-top: 6%;
    padding-left: 10%;
    font-size: 20px;
`;


export function RecentRecord() {
    const summonerName = useRecoilValue(summonerNameAtom);
    const { data: summonerRecentData } = useQuery(["lol", "search"], () => getRecentRecord(summonerName),
        {
            enabled: !!summonerName,
        }
    );

    return (
        <RecentRecordDiv>
            {[0, 1, 2].map((i) => (
                <RecordWrapper key={i}>
                    {summonerRecentData?.[i].type === "Ranked Solo" ?
                        <GameType>솔로랭크</GameType> :
                        <GameType>자유랭크</GameType>
                    }
                    <RecordBox>
                        <ChampionBox
                            src={makeChampionImagePath(summonerRecentData?.[i].champion.replace(/ /gi, ""))}
                            alt="이미지를 불러올 수 없습니다."
                        />
                        {summonerRecentData?.[i].result === "Victory" ?
                            <ResultBox1>승리</ResultBox1>
                            :
                            <ResultBox2>패배</ResultBox2>
                        }
                        <RecentDataBox>
                            <KdaBox>
                                {summonerRecentData?.[i].kill}/
                                {summonerRecentData?.[i].death}/
                                {summonerRecentData?.[i].assist}
                            </KdaBox>
                        </RecentDataBox>
                        <GameDate>
                            {summonerRecentData?.[i].timeStamp}
                        </GameDate>
                    </RecordBox>
                </RecordWrapper>
            ))}
        </RecentRecordDiv>
    )
}