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

function BuyCheckout() {
  const { localUserData } = useLogin();
  const { cartData, sumPrice } = useGetCartData();
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
        <ProductPrimaryBuyButton>{sumPrice}원 주문하기</ProductPrimaryBuyButton>
      </BuyCheckoutInner>
    </BuyCheckoutContainer>
  );
}

export default BuyCheckout;
