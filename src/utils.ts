export function makeImagePath(profileNumber: number) {
  return `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileNumber}.png`;
}

// 챔피언 이미지
export function makeChampionImagePath(championName: string) {
  return `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${championName}.png`;
}
