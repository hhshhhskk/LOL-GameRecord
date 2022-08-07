import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getSummonerId, getSummonerData } from '../api'

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

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const summonerName = searchParams.get("keyword");
    const { data: summonerIdData } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], () => getSummonerId(summonerName), {
        enabled: !!summonerName,
    });
    console.log(summonerIdData);
    const summonerId = summonerIdData?.id;
    const { data: summonerInfoData } = useQuery(["lol", "league", "v4", "entries", "by-summoner"], () => getSummonerData(summonerId),
        {
            enabled: !!summonerId,
        }
    );

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
                        <div>{summonerInfoData?.[0]?.tier}</div>
                        <div>{summonerInfoData?.[0]?.wins}승</div>
                        <div>{summonerInfoData?.[0]?.losses}패</div>
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