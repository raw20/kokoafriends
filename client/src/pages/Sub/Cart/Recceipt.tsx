import {
  ReceiptBox,
  ReceiptLeft,
  ReceiptRight,
  ReceiptText,
} from "./styles/Receipt.style";
import { LargeText } from "./styles/Cart.style";

function Recceipt({ sumPrice }: { sumPrice: number }) {
  return (
    <ReceiptBox>
      <ReceiptLeft>
        <LargeText>상품금액</LargeText>
        <LargeText>배송비</LargeText>
        <ReceiptText>총 결제금액</ReceiptText>
      </ReceiptLeft>
      <ReceiptRight>
        <LargeText> {sumPrice ? sumPrice : 0}원</LargeText>
        {sumPrice ? (
          <>
            <LargeText>{sumPrice >= 30000 ? "무료" : "3000원"}</LargeText>
            <ReceiptText>
              {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
            </ReceiptText>
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
