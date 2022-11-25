import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loginform = styled.form`
  background-color: white;
  color: black;
  border-radius: 20px;
  width: 70%;
  height: 50%;
  font-size: 40px;
  text-align: center;
`;

const LoginTitle = styled.div`
  font-size: 66px;
  padding: 10%;
  font-family: "Jua";
  color: #3f8cf2;
`;

const IdBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 15px;
  border-style: none none solid none;
  border-bottom-color: rgb(233, 233, 233);
  padding-left: 10px;
`;

const PwBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 15px;
  border-style: none none solid none;
  border-bottom-color: rgb(233, 233, 233);
  padding-left: 10px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 500px;
  height: 40px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;
const ImfoBox = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 10%;
  margin-right: 3%;
  text-align: right;
  cursor: pointer;
`;

function Login() {
  const navigate = useNavigate();
  const onSignUp = () => {
    navigate(`/SignUp`);
  };
  return (
    <Wrapper
      initial={{ y: -400 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Loginform>
        <LoginTitle>Login</LoginTitle>
        {/* <div>
          <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=weeO3S29sWCykO_vmNKh&redirect_uri=https://kmslolservice.cf/login/oauth2/code/naver&state=">
            <img src="images/login/naver.png"></img>
          </a>
          <br></br>
          <a href="https://kauth.kakao.com/oauth/authorize?client_id=85599fcffe20ab676fa22f2c8f797546&redirect_uri=https://kmslolservice.cf/login/oauth2/code/kakao&response_type=code">
            <img src="images/login/kakao.png"></img>
          </a>
        </div> */}
        <div>
          <IdBox
            type="text"
            placeholder="아이디"
          />
        </div>
        <div>
          <PwBox
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <LoginButton>Login</LoginButton>
        <ImfoBox>
          <div onClick={onSignUp}>회원이 아니신가요?</div>
          <div>비밀번호가 기억 안 날 때</div>
        </ImfoBox>
      </Loginform>
    </Wrapper>
  );
}

export default Login;
