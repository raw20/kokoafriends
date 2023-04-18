import { useReactiveVar } from "@apollo/client";
import { cartList } from "../../../../store/cart";

function useGetCartData() {
  const cartData = useReactiveVar(cartList);

  const findProductId = cartData
    ? cartData?.map((element) => element.products_id)
    : [];

  const productPrice = cartData
    ?.map((element) => element.products_price * element.products_amount)
    .reduce((a: number, b: number) => a + b, 0);
  const sumPrice = productPrice >= 30000 ? productPrice : productPrice + 3000;

  return { cartData, findProductId, sumPrice, productPrice };
}

export default useGetCartData;
