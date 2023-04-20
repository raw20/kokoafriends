import { Stack } from "@mui/material";
import {
  AlertPageCaontainer,
  AlertPageInner,
  AlertPageBox,
  AlertPageImage,
  AlertPageText,
  AlertPageButton,
} from "./styles/AlertPage.Common.style";
import { LOGIN_REDIRECT_URI } from "../../constant/oAuth";
const { Kakao } = window;

function Login() {
  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: `${LOGIN_REDIRECT_URI}`,
    });
  };

  return (
    <AlertPageCaontainer>
      <AlertPageInner>
        <AlertPageBox>
          <Stack>
            <AlertPageImage
              src={require("../../asset/image/etc/img_apeach.png")}
              alt="사진"
            />
            <AlertPageText>
              로그인이 필요한 서비스입니다.
              <br />
              로그인 후 이용해 주세요.
            </AlertPageText>
            <AlertPageButton onClick={kakaoLoginHandler}>
              카카오 로그인
            </AlertPageButton>
          </Stack>
        </AlertPageBox>
      </AlertPageInner>
    </AlertPageCaontainer>
  );
}

export default Login;
