import { useReactiveVar } from "@apollo/client";
import { cartList } from "../../../../store/cart";
import { CART_LIST } from "../../../../constant/storageKey";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import { ICart } from "../../../../types/Cart.interface";

function useGetCartData() {
  const cartVar = useReactiveVar(cartList);
  const copyCartVar = [...cartVar];
  const [cartData, setCartDate] = useLocalStorage<ICart[]>(CART_LIST, cartVar);
  const findProductId = cartData
    ? cartData?.map((element) => element.products_id)
    : [];
  const sumPrice =
    cartData !== undefined
      ? cartData
          ?.map((element) => element.products_price * element.products_amount)
          .reduce((a: number, b: number) => a + b, 0)
      : 0;
  /* console.log("cartVar : ", copyCartVar);
  console.log("cartData : ", cartData); */

  useEffect(() => {
    setCartDate(cartVar);
  }, [cartVar, setCartDate]);

  return { cartData, findProductId, sumPrice };
}

export default useGetCartData;
