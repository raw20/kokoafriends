import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import {
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
import DeleteCartDialog from "../../../components/Dialog/DeleteCartDialog";
import { isOpenDeleteCartDialogVar } from "../../../store/dialog";
import { useNavigate } from "react-router-dom";
import { ProductPrimaryBuyButton } from "../../../styles/Common.style";

function Cart() {
  const { cartData, sumPrice } = useGetCartData();
  const [productId, setProductId] = useState<number[]>([]);
  const [isAllchecked, setIsAllchecked] = useState(false);
  const navigator = useNavigate();

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
                  <SmallText onClick={() => isOpenDeleteCartDialogVar(true)}>
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
                    <ProductPrimaryBuyButton
                      onClick={() => navigator("/checkout")}
                    >
                      {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
                      주문하기
                    </ProductPrimaryBuyButton>
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

      <DeleteCartDialog id={productId} />
    </>
  );
}

export default Cart;
