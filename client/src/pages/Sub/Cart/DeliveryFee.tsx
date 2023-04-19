import {
  DeliveryFeeBar,
  DeliveryFeeBarFull,
  DeliveryFeeBox,
  DeliveryFeeText,
  DeliveryFeeTextBox,
} from "./styles/DeliveryFee.style";
import { SecondMediumText } from "./styles/Cart.style";

function DeliveryFee({ productPrice }: { productPrice: number }) {
  return (
    <DeliveryFeeBox>
      <DeliveryFeeTextBox>
        {productPrice ? (
          <>
            <DeliveryFeeText>
              {productPrice >= 30000 ? "무료배송" : 30000 - productPrice}
            </DeliveryFeeText>
            <SecondMediumText>
              {productPrice >= 30000 ? null : "원 추가시 무료배송"}
            </SecondMediumText>
          </>
        ) : (
          <>
            <SecondMediumText>30000원 추가시 무료배송</SecondMediumText>
          </>
        )}
      </DeliveryFeeTextBox>
      <DeliveryFeeBar>
        {productPrice ? (
          <>
            <DeliveryFeeBarFull priceSize={Number(productPrice)}>
              1
            </DeliveryFeeBarFull>
          </>
        ) : null}
      </DeliveryFeeBar>
    </DeliveryFeeBox>
  );
}

export default DeliveryFee;
