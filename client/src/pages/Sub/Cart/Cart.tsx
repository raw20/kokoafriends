import { useNavigate } from "react-router-dom";
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

function Cart() {
  const navigate = useNavigate();

  return (
    <>
      <CartContainer>
        <CartInner>
          <Title>장바구니</Title>
          {Number(data?.cartList.length) === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <DeliveryFee />

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
                {data?.cartList.map((ele, index) => (
                  <CartList />
                ))}
              </CartListTable>

              <Recceipt />

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
