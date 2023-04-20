import {
  ReceiptBox,
  ReceiptLeft,
  ReceiptRight,
  ReceiptText,
} from "../../Main/Cart/styles/Receipt.style";
import { LargeText } from "../../Main/Cart/styles/Cart.style";

function Recceipt({
  productPrice,
  sumPrice,
}: {
  productPrice: number;
  sumPrice: number;
}) {
  return (
    <ReceiptBox>
      <ReceiptLeft>
        <LargeText>상품금액</LargeText>
        <LargeText>배송비</LargeText>
        <ReceiptText>총 결제금액</ReceiptText>
      </ReceiptLeft>
      <ReceiptRight>
        <LargeText> {productPrice}원</LargeText>
        {productPrice ? (
          <>
            <LargeText>{productPrice >= 30000 ? "무료" : "3000원"}</LargeText>
            <ReceiptText>{sumPrice}원</ReceiptText>
          </>
        ) : (
          <>
            <LargeText>3000원</LargeText>
            <ReceiptText>0원</ReceiptText>
          </>
        )}
      </ReceiptRight>
    </ReceiptBox>
  );
}

export default Recceipt;
