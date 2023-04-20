import { useNavigate } from "react-router-dom";
import {
  AlertPageBox,
  AlertPageButton,
  AlertPageCaontainer,
  AlertPageImage,
  AlertPageInner,
  AlertPageText,
} from "../../../styles/AlertPage.Common.style";
import { Stack } from "@mui/material";

function EmptyCart() {
  const navigator = useNavigate();
  return (
    <AlertPageCaontainer>
      <AlertPageInner>
        <AlertPageBox>
          <Stack>
            <AlertPageImage
              src={require("../../../asset/image/etc/ico_cart_empty.png")}
              alt="사진"
            />
            <AlertPageText>
              아직 관심상품이 없네요!
              <br />
              귀여운 프렌즈 상품을 추천드릴게요
            </AlertPageText>
            <AlertPageButton onClick={() => navigator("/best")}>
              인기상품 보기
            </AlertPageButton>
          </Stack>
        </AlertPageBox>
      </AlertPageInner>
    </AlertPageCaontainer>
  );
}

export default EmptyCart;
