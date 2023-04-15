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
import useGetCartData from "../../../services/products/hooks/custom/useGetCartData";
import { ChangeEvent, useState } from "react";
import { deleteCart } from "../../../store/cart";

function Cart() {
  const { cartData, sumPrice } = useGetCartData();
  const [productId, setProductId] = useState<number[]>([]);
  const [isAllchecked, setIsAllchecked] = useState(false);

  function allCheckHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked && cartData) {
      setProductId(cartData?.map((element) => element.products_id));
      setIsAllchecked(true);
    } else {
      const copyProductId = [...productId];
      copyProductId.splice(0);
      setProductId(copyProductId);
      setIsAllchecked(false);
    }
  }

  return (
    <>
      <CartContainer>
        <CartInner>
          <Title>장바구니</Title>
          {cartData?.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <DeliveryFee sumPrice={sumPrice!} />

              <CheckTable>
                <CheckLeft>
                  <CheckBox
                    type="checkbox"
                    checked={isAllchecked}
                    onChange={(e) => allCheckHandler(e)}
                  />
                  <MediumText>총 {cartData?.length} 개</MediumText>
                </CheckLeft>
                <CheckRight>
                  <SmallText onClick={() => deleteCart(productId)}>
                    선택삭제
                  </SmallText>
                </CheckRight>
              </CheckTable>
              <CartListTable>
                {cartData
                  ? cartData?.map((element) => (
                      <CartList
                        key={element.cart_id}
                        cartElement={element}
                        isAllchecked={isAllchecked}
                        setIsAllchecked={setIsAllchecked}
                        productId={productId}
                        setProductId={setProductId}
                      />
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
