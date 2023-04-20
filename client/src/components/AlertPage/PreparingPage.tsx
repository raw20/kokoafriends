import { Stack } from "@mui/material";
import {
  AlertPageCaontainer,
  AlertPageInner,
  AlertPageBox,
  AlertPageImage,
  AlertPageText,
  AlertPageButton,
} from "../../styles/AlertPage.Common.style";
import { useNavigate } from "react-router-dom";

function PreparingPage() {
  const navigator = useNavigate();

  return (
    <AlertPageCaontainer>
      <AlertPageInner>
        <AlertPageBox>
          <Stack>
            <AlertPageImage
              src={require("../../asset/image/etc/img_neo.png")}
              alt="사진"
            />
            <AlertPageText>
              구현 예정인 페이지입니다.
              <br />더 나은 서비스로 찾아 뵙겠습니다!
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

export default PreparingPage;
