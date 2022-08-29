import styled from "styled-components";

const FooterDiv = styled.div`
  border-top: solid 1px white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px 15% 10px 15%;
`;

export function Footer() {

    return (
        <FooterDiv>
            © 2022 Kwak.GG. Kwak.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </FooterDiv>
    )
}