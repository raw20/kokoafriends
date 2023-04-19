import { useReactiveVar } from "@apollo/client";
import { cartList } from "../../../../store/cart";
import getProductsPrice from "../../../../utils/getProductsPrice";

function useGetCartData() {
  const cartData = useReactiveVar(cartList);

  const findProductId = cartData
    ? cartData?.map((element) => element.products_id)
    : [];

  const productPrice = getProductsPrice(cartData);
  const sumPrice = productPrice >= 30000 ? productPrice : productPrice + 3000;

  const sumQuantity = cartData
    ?.map((element) => element.products_amount)
    .reduce((a: number, b: number) => a + b, 0);

  const get_product_item_name = cartData?.map(
    (element) => element.products_name
  );

  const product_item_name = `${get_product_item_name[0]} 외 ${
    cartData.length - 1
  }개`;

  return {
    cartData,
    findProductId,
    sumPrice,
    sumQuantity,
    productPrice,
    product_item_name,
  };
}

export default useGetCartData;
