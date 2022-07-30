import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  background-color: red;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;
const Title = styled.div`
  margin-top: 20vh;
  font-size: 66px;
  background-color : blue;
`;
const UserName = styled.input`
  margin-top: 10vh;
`;
const UserButton = styled.button`
  margin-top: 5vh;
  font-size: 30px;
`;

function Main() {
    const navigate = useNavigate();
    const onSearchClick = () => navigate("/userinfo");
    return (
        <>
            <Header>
                <h2>header</h2>
            </Header>
            <Wrapper>
                <Title>
                    KMS.GG
                </Title>
                <UserName placeholder="UserName"></UserName>
                <UserButton onClick={onSearchClick}>
                    Search
                </UserButton>
            </Wrapper>
        </>
    );
}

export default Main;
