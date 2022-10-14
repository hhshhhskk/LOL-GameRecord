import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getChampionMastery } from '../api';
import { summonerNameAtom } from "../atoms"
import { makeChampionImagePath } from '../utils';

const ChampionMasteryDiv = styled.div`
    flex-direction: row;
    font-size: 30px;
    color: black;
`;

const GameCount = styled.div`
  margin-top: 10%;  
`;
const MasteyBox = styled.div`
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


export function ChampionMastery() {
    const summonerName = useRecoilValue(summonerNameAtom);
    const { data: summonerMasteryData } = useQuery(["lol"], () => getChampionMastery(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    return (
        <ChampionMasteryDiv>
            {[0, 1, 2].map((i) => (
                <MasteyBox key={i}>
                    <ChampionBox
                        key={i}
                        src={makeChampionImagePath(summonerMasteryData?.[i].championName)}
                        alt="이미지를 불러올 수 없습니다."
                    />
                    <GameCount>{summonerMasteryData?.[i].championLevel} 레벨
                    </GameCount>
                    <MostTable>
                        <tbody>
                            <tr>
                                <td>숙련도 점수</td>
                            </tr>
                            <tr>
                                <td>{summonerMasteryData?.[i].championPoints}점</td>
                            </tr>
                        </tbody>
                    </MostTable>
                </MasteyBox>
            ))}
        </ChampionMasteryDiv>
    )
}