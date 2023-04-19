import { makeVar } from "@apollo/client";
import { ICart } from "../types/Cart.interface";
import { DIRECT_PRODUCT } from "../constant/storageKey";
import getCreatedIndex from "../utils/getCreatedIndex";

export const localOneProduct =
  JSON.parse(localStorage.getItem(DIRECT_PRODUCT)!) || [];
export const oneProductVar = makeVar<ICart[]>(localOneProduct);

export function addProductItem(
  products_id: number,
  products_name: string,
  products_amount: number,
  products_price: string,
  products_slideImg: string
) {
  const currentItem = oneProductVar();
  let itemIndex = getCreatedIndex(
    currentItem.map((element) => element.cart_id)
  );
  const newItem = {
    cart_id: itemIndex + 1,
    products_id: products_id,
    products_name: products_name,
    products_amount: products_amount,
    products_price: Number(products_price.split(",").join("")),
    products_slideImg: products_slideImg,
  };
  oneProductVar([...currentItem, newItem]);
  localStorage.setItem(DIRECT_PRODUCT, JSON.stringify(oneProductVar()));
}
