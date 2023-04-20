import { Stack } from "@mui/material";
import {
  AlertPageCaontainer,
  AlertPageInner,
  AlertPageBox,
  AlertPageImage,
  AlertPageText,
  AlertPageButton,
} from "./styles/AlertPage.Common.style";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigator = useNavigate();

  return (
    <AlertPageCaontainer>
      <AlertPageInner>
        <AlertPageBox>
          <Stack>
            <AlertPageImage
              src={require("../../asset/image/etc/img_tube.png")}
              alt="사진"
            />
            <AlertPageText>
              죄송합니다 예상치 못한 오류가 발생하였습니다.
              <br />
              잠시 후 다시 시도해 주세요.
            </AlertPageText>
            <AlertPageButton onClick={() => navigator("/")}>
              홈으로 돌아가기
            </AlertPageButton>
          </Stack>
        </AlertPageBox>
      </AlertPageInner>
    </AlertPageCaontainer>
  );
}

export default Error;
