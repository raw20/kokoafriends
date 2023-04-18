import {
  BuyCheckoutContainer,
  BuyCheckoutInner,
} from "./styles/BuyCheckOut.style";
import { Box } from "@mui/material";
import OrderCustomer from "./OrderCustomer";
import useLogin from "../../../services/auth/hooks/useLogin";
import ShippingAddress from "./ShippingAddress";
import OrderProducts from "./OrderProducts";
import { ProductPrimaryBuyButton } from "../../../styles/Common.style";
import Payment from "./Payment";
import useGetCartData from "../../../services/products/hooks/custom/useGetCartData";
import useOrderData from "../../../services/products/hooks/custom/useOrderData";
import { DefaultBuyButton } from "../Cart/styles/Cart.style";

function BuyCheckout() {
  const { localUserData } = useLogin();
  const { cartData, sumPrice } = useGetCartData();
  const { isCheckBuyItem } = useOrderData();
  return (
    <BuyCheckoutContainer>
      <BuyCheckoutInner>
        <Box>
          <OrderCustomer user={localUserData!} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <ShippingAddress />
        </Box>
        <Box sx={{ mt: 2 }}>
          <OrderProducts cartData={cartData} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Payment />
        </Box>
        {isCheckBuyItem ? (
          <ProductPrimaryBuyButton>
            {sumPrice}원 주문하기
          </ProductPrimaryBuyButton>
        ) : (
          <DefaultBuyButton>{sumPrice}원 주문하기</DefaultBuyButton>
        )}
      </BuyCheckoutInner>
    </BuyCheckoutContainer>
  );
}

export default BuyCheckout;
