import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import {
  BuyButton,
  BuyTable,
  CartContainer,
  CartInner,
  CartListTable,
  CheckBox,
  CheckLeft,
  CheckRight,
  CheckTable,
  DefaultBuyButton,
  MediumText,
  SmallText,
  Title,
} from "./styles/Cart.style";
import Recceipt from "./Recceipt";
import DeliveryFee from "./DeliveryFee";
import { useReactiveVar } from "@apollo/client";
import { cartList } from "../../../store/cart";

function Cart() {
  const data = useReactiveVar(cartList);
  console.log(data);
  const sumPrice =
    data !== undefined
      ? data
          ?.map((element) => element.products_price)
          .reduce((a: number, b: number) => a + b, 0)
      : 0;
  return (
    <>
      <CartContainer>
        <CartInner>
          <Title>장바구니</Title>
          {data === undefined ? (
            <EmptyCart />
          ) : (
            <>
              <DeliveryFee sumPrice={sumPrice!} />

              <CheckTable>
                <CheckLeft>
                  <CheckBox type="checkbox" onChange={(e) => console.log(e)} />
                  <MediumText>총 0개</MediumText>
                </CheckLeft>
                <CheckRight>
                  <SmallText>선택삭제</SmallText>
                </CheckRight>
              </CheckTable>
              <CartListTable>
                {data !== undefined
                  ? data?.map((element) => (
                      <CartList key={element.cart_id} cartElement={element} />
                    ))
                  : null}
              </CartListTable>

              <Recceipt sumPrice={sumPrice!} />

              <BuyTable>
                {sumPrice ? (
                  <>
                    <BuyButton>
                      {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
                      주문하기
                    </BuyButton>
                  </>
                ) : (
                  <>
                    <DefaultBuyButton>주문하기</DefaultBuyButton>
                  </>
                )}
              </BuyTable>
            </>
          )}
        </CartInner>
      </CartContainer>
    </>
  );
}

export default Cart;
