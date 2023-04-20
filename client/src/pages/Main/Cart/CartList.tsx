import { ChangeEvent, useEffect, useState } from "react";
import {
  amountMinus,
  amountPlus,
  amoutInput,
  deleteCart,
} from "../../../store/cart";
import { ICartListComponent } from "../../../types/IProps.interface";
import {
  CheckBox,
  LargeText,
  MediumText,
} from "../../Main/Cart/styles/Cart.style";
import {
  BoxCenter,
  BoxLeft,
  BoxRight,
  CartListBox,
  CartProductImage,
  DeleteButton,
} from "../../Main/Cart/styles/CartList.style";
import {
  NumControlBox,
  NumberControlButton,
  NumberControlInput,
} from "../../../styles/Common.style";
import { Stack } from "@mui/material";

function CartList({
  cartElement,
  isAllchecked,
  setIsAllchecked,
  productId,
  setProductId,
}: ICartListComponent) {
  const [isSelectCheck, setIsSelectCheck] = useState(false);

  function selectedCheckHandler(e: ChangeEvent<HTMLInputElement>) {
    const copyProductId = [...productId];
    setIsAllchecked(false);
    setIsSelectCheck(e.target.checked);
    if (e.target.checked) {
      setProductId([...productId, Number(e.target.value)]);
    }
    if (!e.target.checked) {
      copyProductId.splice(productId.indexOf(Number(e.target.value)), 1);
      setProductId(copyProductId);
    }
    if (isAllchecked) {
      copyProductId.splice(0);
      setProductId(copyProductId);
      setIsAllchecked(false);
    }
  }

  useEffect(() => {
    if (!isAllchecked) {
      setIsSelectCheck(false);
    }
  }, [isAllchecked]);

  return (
    <CartListBox>
      <BoxLeft>
        <CheckBox
          type="checkbox"
          defaultValue={cartElement.products_id}
          checked={isAllchecked ? isAllchecked : isSelectCheck}
          onChange={(e) => selectedCheckHandler(e)}
        />
        <CartProductImage src={cartElement.products_slideImg} />
      </BoxLeft>
      <BoxCenter>
        <Stack>
          <LargeText>{cartElement.products_name}</LargeText>
          <MediumText>
            {cartElement.products_price * cartElement.products_amount}원
          </MediumText>
        </Stack>
        <Stack>
          <NumControlBox>
            <NumberControlButton
              onClick={() => amountMinus(cartElement.products_id)}
            >
              -
            </NumberControlButton>
            <NumberControlInput
              type="number"
              value={cartElement.products_amount}
              onChange={(e) =>
                amoutInput(cartElement.products_id, Number(e.target.value))
              }
            />
            <NumberControlButton
              onClick={() => amountPlus(cartElement.products_id)}
            >
              +
            </NumberControlButton>
          </NumControlBox>
        </Stack>
      </BoxCenter>
      <BoxRight>
        <DeleteButton onClick={() => deleteCart(cartElement.products_id)} />
      </BoxRight>
    </CartListBox>
  );
}

export default CartList;
