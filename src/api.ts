// 롤 API 키는 발급 시 24시간 사용가능
const API_KEY = "RGAPI-502d041e-608f-4c39-a1f4-c56e72117798";

//임시
// const summonerName = "hide on bush";

export function getSummonerId(summonerName: any) {
  return fetch(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
  ).then((response) => response.json());
}
