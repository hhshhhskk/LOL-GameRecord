import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const UserName = styled.input`
  margin-top: 10vh;
`;
const UserButton = styled.button`
  margin-top: 5vh;
  font-size: 30px;
`;

interface IForm {
  keyword: string;
}

function Main() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };
  return (
    <>
      <Header>
        <h2>header</h2>
      </Header>
      <Wrapper>
        <Title>
          KMS.GG
        </Title>
        <Search onSubmit={handleSubmit(onValid)}>
          <UserName
            {...register("keyword", { required: true, minLength: 2 })}
            placeholder="username">
          </UserName>
          <UserButton>
            Search
          </UserButton>
        </Search>
      </Wrapper>
    </>
  );
}

export default Main;
