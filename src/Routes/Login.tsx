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
    height: 50%;
    font-size: 40px;
`;
function Login() {
    return (
        <Wrapper>
            <Loginform>
                <div>
                    <input
                        type="text"
                        placeholder="아이디"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호"
                    />
                </div>
                <button>Login</button>
            </Loginform>
        </Wrapper>
    )
}

export default Login;