import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";

// 롤 API 키는 발급 시 24시간 사용가능
const API_KEY = "RGAPI-341da857-6566-436e-92a6-fc8eaf4bb36b";

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  min-height: 300px;
`;
const SummonerName = styled.div`
    font-size: 25px;
    color: black;
`;

// interface ISummonerInfo {
//     leagueId: string,
//     queueType: string,
//     tier: string,
//     rank: string,
//     summonerId: string,
//     summonerName: string,
//     leaguePoints: number,
//     wins: number,
//     losses: number,
//     veteran: boolean,
//     inactive: boolean,
//     freshBlood: boolean,
//     hotStreak: boolean,
// }

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const summonerName = searchParams.get("keyword");
    const { data: summonerIdData } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], async () => {
        return getSummonerId();
    });
    const { data: summonerInfoData } = useQuery(["lol", "league", "v4", "entries", "by-summoner"], getSummonerData);
    console.log(summonerIdData);

    // 입력한 소환사 이름으로 소환사 ID값 API호출
    function getSummonerId() {
        return fetch(
            `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
        )
            .then((response) => response.json())
    }
    //임시 
    const summonerId = "eSXPZHMS9NP7hnsupEmoRYJtfzuDOTGABYKffRqqGA5p9g";
    // const summonerId = summonerIdData?.id;

    function getSummonerData() {
        console.log(summonerId);
        return fetch(
            `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`
        )
            .then((response) => response.json())
    }
    return (

        <Wrapper>
            <Boards>
                <Board>
                    <SummonerName>
                        아이콘, {summonerIdData?.name}
                    </SummonerName>
                </Board>
                <Board>
                    <SummonerName>
                        승패,
                        {summonerInfoData[0]?.tier}
                    </SummonerName>
                </Board>
                <Board>
                    <SummonerName>
                        모스트 3
                    </SummonerName>
                </Board>
                <Board>
                    <SummonerName>
                        최근 전적 3
                    </SummonerName>
                </Board>
            </Boards>
        </Wrapper>

    )

}
export default Search;