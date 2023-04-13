import { CheckBox, LargeText, MediumText } from "./styles/Cart.style";
import {
  BoxCenter,
  BoxLeft,
  BoxRight,
  CartListBox,
  CartProductImage,
  DeleteButton,
} from "./styles/CartList.style";

function CartList() {
  return (
    <CartListBox key={ele.cartId}>
      <BoxLeft>
        <CheckBox type="checkbox" checked={ele.check ? true : false} />
        <CartProductImage src={`/img/product/${ele?.slideImg}`} />
      </BoxLeft>
      <BoxCenter>
        <LargeText>{ele.sName}</LargeText>
        <MediumText>{ele.sPrice * ele.bCount}원</MediumText>
      </BoxCenter>
      <BoxRight>
        <DeleteButton />
      </BoxRight>
    </CartListBox>
  );
}

export default CartList;
