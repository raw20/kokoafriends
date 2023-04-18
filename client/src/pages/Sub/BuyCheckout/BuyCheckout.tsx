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

function BuyCheckout() {
  const { localUserData } = useLogin();
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
          <OrderProducts />
        </Box>
        <Box>
          <Payment />
        </Box>
        <ProductPrimaryBuyButton>구매하기</ProductPrimaryBuyButton>
      </BuyCheckoutInner>
    </BuyCheckoutContainer>
  );
}

export default BuyCheckout;
