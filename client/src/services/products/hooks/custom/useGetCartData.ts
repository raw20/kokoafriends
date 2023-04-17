import { useReactiveVar } from "@apollo/client";
import { cartList } from "../../../../store/cart";

function useGetCartData() {
  const cartData = useReactiveVar(cartList);

  const findProductId = cartData
    ? cartData?.map((element) => element.products_id)
    : [];

  const sumPrice =
    cartData !== undefined
      ? cartData
          ?.map((element) => element.products_price * element.products_amount)
          .reduce((a: number, b: number) => a + b, 0)
      : 0;

  return { cartData, findProductId, sumPrice };
}

export default useGetCartData;
