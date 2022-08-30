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
        width: 200px;
        height: 200px;
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
    //console.log(summonerInfoData);

    const imgUrl = `../ranked-emblems/${summonerInfoData?.tier}.png`;
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
            <div>{summonerInfoData?.tier}</div>
            <span>{summonerInfoData?.wins}승 </span>
            <span>{summonerInfoData?.losses}패</span>
        </SummonerTierDiv>
    )
}