import { ICartListComponent } from "../../../types/IProps.interface";
import { CheckBox, LargeText, MediumText } from "./styles/Cart.style";
import {
  BoxCenter,
  BoxLeft,
  BoxRight,
  CartListBox,
  CartProductImage,
  DeleteButton,
} from "./styles/CartList.style";

function CartList({ cartElement }: ICartListComponent) {
  return (
    <CartListBox>
      <BoxLeft>
        <CheckBox type="checkbox" />
        <CartProductImage src={cartElement.products_slideImg} />
      </BoxLeft>
      <BoxCenter>
        <LargeText>{cartElement.products_name}</LargeText>
        <MediumText>
          {cartElement.products_price * cartElement.products_amount}원
        </MediumText>
      </BoxCenter>
      <BoxRight>
        <DeleteButton />
      </BoxRight>
    </CartListBox>
  );
}

export default CartList;
