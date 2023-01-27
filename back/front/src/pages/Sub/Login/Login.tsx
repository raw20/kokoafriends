import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../../auth/OAuth";

const Wrap = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 50%;
  height: auto;
  margin: 5rem auto;
`;
const Alert = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;
const Text = styled.span`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1.3rem;
`;
const Button = styled.span`
  width: 250px;
  height: 40px;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
`;
function Login() {
  const image = ["choonsik_etc.png", "lion_etc.png"];
  const index = Math.floor(Math.random() * image.length);
  return (
    <Wrap>
      <Inner>
        <Alert>
          <Image src={`/img/etc/${image[index]}`} alt="사진" />
          <Text>로그인이 필요한 서비스입니다. 로그인 후 이용해 주세요.</Text>
          <a href={KAKAO_AUTH_URL}>
            <Button>카카오 로그인</Button>
          </a>
        </Alert>
      </Inner>
    </Wrap>
  );
}

export default Login;
