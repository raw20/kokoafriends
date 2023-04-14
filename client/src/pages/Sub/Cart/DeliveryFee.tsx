import {
  DeliveryFeeBar,
  DeliveryFeeBarFull,
  DeliveryFeeBox,
  DeliveryFeeText,
  DeliveryFeeTextBox,
} from "./styles/DeliveryFee.style";
import { SecondMediumText } from "./styles/Cart.style";

function DeliveryFee({ sumPrice }: { sumPrice: number }) {
  return (
    <DeliveryFeeBox>
      <DeliveryFeeTextBox>
        {sumPrice ? (
          <>
            <DeliveryFeeText>
              {sumPrice >= 30000 ? "무료배송" : 30000 - sumPrice}
            </DeliveryFeeText>
            <SecondMediumText>
              {sumPrice >= 30000 ? null : "원 추가시 무료배송"}
            </SecondMediumText>
          </>
        ) : (
          <>
            <SecondMediumText>30000원 추가시 무료배송</SecondMediumText>
          </>
        )}
      </DeliveryFeeTextBox>
      <DeliveryFeeBar>
        {sumPrice ? (
          <>
            <DeliveryFeeBarFull priceSize={Number(sumPrice)}>
              1
            </DeliveryFeeBarFull>
          </>
        ) : null}
      </DeliveryFeeBar>
    </DeliveryFeeBox>
  );
}

export default DeliveryFee;
