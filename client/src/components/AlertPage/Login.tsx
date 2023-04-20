import { Stack } from "@mui/material";
import { KAKAO_AUTH_URL } from "../../constant/oAuth";
import {
  AlertPageCaontainer,
  AlertPageInner,
  AlertPageBox,
  AlertPageImage,
  AlertPageText,
  AlertPageButton,
} from "../../styles/AlertPage.Common.style";

function Login() {
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
            <a href={KAKAO_AUTH_URL}>
              <AlertPageButton>카카오 로그인</AlertPageButton>
            </a>
          </Stack>
        </AlertPageBox>
      </AlertPageInner>
    </AlertPageCaontainer>
  );
}

export default Login;
