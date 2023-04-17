import {
  BuyCheckoutContainer,
  BuyCheckoutInner,
} from "./styles/BuyCheckOut.style";
import { Box } from "@mui/material";
import OrderCustomer from "./OrderCustomer";
import useLogin from "../../../services/auth/hooks/useLogin";
import ShippingAddress from "./ShippingAddress";

function BuyCheckout() {
  const { localUserData } = useLogin();
  return (
    <BuyCheckoutContainer>
      <BuyCheckoutInner>
        <Box>
          <OrderCustomer user={localUserData!} />
        </Box>
        <Box>
          <ShippingAddress />
        </Box>
      </BuyCheckoutInner>
    </BuyCheckoutContainer>
  );
}

export default BuyCheckout;
