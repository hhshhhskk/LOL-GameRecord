import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ChampionRotations } from "../components/ChampionRotations";

const Header = styled.div`
  background-color: rgb(111, 111, 111);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 20vh;
  font-size: 66px;
`;

const Search = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const UserName = styled.input`
  width: 500px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px 0 0 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;
const UserButton = styled.button`
  width: 40px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 0 15px 15px 0;
  outline: none;
  background-color: rgb(233, 233, 233);
`;
const SvgK = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const SvgW = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const SvgA = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const svgIcon = {
  start: {
    pathLength: 0.1,
    fill: "rgba(255, 255, 255, 0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  }
}

interface IForm {
  keyword: string;
}

function Main() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = async (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };


  return (
    <>
      <Header>
        <h2>header</h2>
      </Header>
      <Wrapper>
        <Title>
          <SvgK
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <motion.path
              variants={svgIcon}
              initial={"start"}
              animate={"end"}
              transition={{
                default: { duration: 4 },
                fill: { duration: 2, delay: 3 }
              }}
              d="M314.3 429.8c10.06 14.53 6.438 34.47-8.094 44.53c-5.562 3.844-11.91 5.688-18.19 5.688c-10.16 0-20.12-4.812-26.34-13.78L128.1 273.3L64 338.9v109.1c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384C0 46.34 14.31 32.01 32 32.01S64 46.34 64 64.01v183.3l201.1-205.7c12.31-12.61 32.63-12.86 45.25-.5c12.62 12.34 12.88 32.61 .5 45.25l-137.2 140.3L314.3 429.8z" />
          </SvgK>
          <SvgW xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <motion.path
              variants={svgIcon}
              initial={"start"}
              animate={"end"}
              transition={{
                default: { duration: 4 },
                fill: { duration: 2, delay: 3 }
              }}
              d="M573.1 75.25l-144 384c-4.703 12.53-16.67 20.77-29.95 20.77c-.4062 0-.8125 0-1.219-.0156c-13.77-.5156-25.66-9.797-29.52-23.03L288 178.3l-81.28 278.7c-3.859 13.23-15.75 22.52-29.52 23.03c-13.75 .4687-26.33-7.844-31.17-20.75l-144-384c-6.203-16.55 2.188-34.98 18.73-41.2C37.31 27.92 55.75 36.23 61.97 52.78l110.2 293.1l85.08-291.7C261.3 41.41 273.8 32.01 288 32.01s26.73 9.396 30.72 23.05l85.08 291.7l110.2-293.1c6.219-16.55 24.67-24.86 41.2-18.73C571.8 40.26 580.2 58.7 573.1 75.25z" />
          </SvgW>
          <SvgA xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <motion.path
              variants={svgIcon}
              initial={"start"}
              animate={"end"}
              transition={{
                default: { duration: 4 },
                fill: { duration: 2, delay: 3 }
              }}
              d="M381.5 435.7l-160-384C216.6 39.78 204.9 32.01 192 32.01S167.4 39.78 162.5 51.7l-160 384c-6.797 16.31 .9062 35.05 17.22 41.84c16.38 6.828 35.08-.9219 41.84-17.22l31.8-76.31h197.3l31.8 76.31c5.109 12.28 17.02 19.7 29.55 19.7c4.094 0 8.266-.7969 12.3-2.484C380.6 470.7 388.3 452 381.5 435.7zM119.1 320L192 147.2l72 172.8H119.1z" />
          </SvgA>
          <SvgK
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <motion.path
              variants={svgIcon}
              initial={"start"}
              animate={"end"}
              transition={{
                default: { duration: 4 },
                fill: { duration: 2, delay: 3 }
              }}
              d="M314.3 429.8c10.06 14.53 6.438 34.47-8.094 44.53c-5.562 3.844-11.91 5.688-18.19 5.688c-10.16 0-20.12-4.812-26.34-13.78L128.1 273.3L64 338.9v109.1c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384C0 46.34 14.31 32.01 32 32.01S64 46.34 64 64.01v183.3l201.1-205.7c12.31-12.61 32.63-12.86 45.25-.5c12.62 12.34 12.88 32.61 .5 45.25l-137.2 140.3L314.3 429.8z" />
          </SvgK>
        </Title>
        <Search onSubmit={handleSubmit(onValid)}>
          <UserName
            {...register("keyword", { required: true, minLength: 2 })}
            placeholder="username">
          </UserName>
          <UserButton>
            <svg
              fill="rgb(111, 111, 111)"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            >
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </UserButton>
        </Search>
      </Wrapper>
      <ChampionRotations></ChampionRotations>
    </>
  );
}

export default Main;
