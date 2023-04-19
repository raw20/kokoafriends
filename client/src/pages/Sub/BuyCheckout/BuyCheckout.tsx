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
import { useEffect } from "react";
import { getKakaoPayReady } from "../../../utils/getKakaoPayReady";

function BuyCheckout() {
  const { localUserData } = useLogin();
  const { cartData, sumPrice, sumQuantity, product_item_name } =
    useGetCartData();
  const { payRedirectURL, isCheckBuyItem } = useOrderData();

  useEffect(() => {
    if (isCheckBuyItem) {
      getKakaoPayReady(product_item_name, sumQuantity, sumPrice);
    }
  }, [isCheckBuyItem, product_item_name, sumPrice, sumQuantity]);

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
          <a href={payRedirectURL}>
            <ProductPrimaryBuyButton>
              {sumPrice}원 주문하기
            </ProductPrimaryBuyButton>
          </a>
        ) : (
          <DefaultBuyButton>{sumPrice}원 주문하기</DefaultBuyButton>
        )}
      </BuyCheckoutInner>
    </BuyCheckoutContainer>
  );
}

export default BuyCheckout;
