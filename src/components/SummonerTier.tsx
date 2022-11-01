import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getSummonerData } from '../api';
import { summonerNameAtom } from "../atoms"

const SummonerTierDiv = styled.div`
    font-size: 25px;
    color: black;
    text-align: center;
    img {
        width: 150px;
        height: 150px;
    }
`;
const TierImg = styled.div`
`;

export function SummonerTier() {
    const summonerName = useRecoilValue(summonerNameAtom);
    const { data: summonerInfoData } = useQuery(["lol", "league", "v4", "entries", "by-summoner"], () => getSummonerData(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    // console.log(summonerInfoData[0]);
    let imgUrl = "";
    let rankType = "SOLO_0";
    if (summonerInfoData?.[0].queueType === "RANKED_SOLO_5x5") {
        imgUrl = `../ranked-emblems/${summonerInfoData?.[0].tier}.png`;
    } else {
        imgUrl = `../ranked-emblems/${summonerInfoData?.[1].tier}.png`;
        rankType = "SOLO_1"
    }
    // console.log(imgUrl);

    return (
        <SummonerTierDiv>
            <TierImg>
                <img
                    className="tierImg"
                    src={imgUrl}
                    alt="티어 이미지를 불러올 수 없습니다."
                />
            </TierImg>
            {rankType === "SOLO_1" ?
                <>
                    <div>{summonerInfoData?.[0].tier}</div>
                    <span>{summonerInfoData?.[0].wins}승 </span>
                    <span>{summonerInfoData?.[0].losses}패</span>
                </>
                :
                <>
                    <div>{summonerInfoData?.[0].tier}</div>
                    <span>{summonerInfoData?.[0].wins}승 </span>
                    <span>{summonerInfoData?.[0].losses}패</span>
                </>
            }

        </SummonerTierDiv>
    )
}