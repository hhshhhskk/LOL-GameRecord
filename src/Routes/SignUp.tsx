import styled from "styled-components";
import { motion } from "framer-motion";

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
    height: 60%;
    font-size: 40px;
    text-align: center;
`;

const LoginTitle = styled.div`
    font-size: 66px;
    padding: 10%;
    font-family: "Jua";
    color: #3F8CF2;
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

const CreateButton = styled.button`
    cursor: pointer;
    width: 500px;
    height: 40px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    margin-top: 10%;
`;

function SignUp() {
    return (
        <Wrapper>
            <Loginform>
                <LoginTitle>
                    회원가입
                </LoginTitle>
                <div>
                    <IdBox
                        type="text"
                        placeholder="닉네임"
                    />
                </div>
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
                <div>
                    <PwBox
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                </div>
                <CreateButton>완료</CreateButton>
            </Loginform>
        </Wrapper>
    )
}

export default SignUp;