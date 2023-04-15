import { makeVar } from "@apollo/client";
import { ICart } from "../types/Cart.interface";

const cartId = makeVar(0);
export const cartList = makeVar<ICart[]>([]);

export function addCart(
  products_id: number,
  products_name: string,
  products_amount: number,
  products_price: string,
  products_slideImg: string
) {
  const prevId = cartId();
  const currentCartItem = cartList();
  const newCartItem = {
    cart_id: prevId + 1,
    products_id: products_id,
    products_name: products_name,
    products_amount: products_amount,
    products_price: Number(products_price.split(",").join("")),
    products_slideImg: products_slideImg,
  };
  cartList([...currentCartItem, newCartItem]);
  cartId(prevId + 1);
  //localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}

export function deleteCart(productId: number | number[]) {
  const currentCartItem = [...cartList()];

  if (typeof productId === "object") {
    const filterCartItem = currentCartItem.filter(
      (element) => !productId.includes(element.products_id)
    );
    cartList(filterCartItem);
  }
  const deleteIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );

  if (deleteIndex === -1) return;

  currentCartItem.splice(deleteIndex, 1);
  cartList(currentCartItem);
}

export function amountMinus(productId: number) {
  const currentCartItem = [...cartList()];
  const findIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );
  if (currentCartItem[findIndex].products_amount > 1)
    currentCartItem[findIndex].products_amount -= 1;

  cartList(currentCartItem);
}

export function amountPlus(productId: number) {
  const currentCartItem = [...cartList()];
  const findIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );
  if (currentCartItem[findIndex].products_amount > 0)
    currentCartItem[findIndex].products_amount += 1;

  cartList(currentCartItem);
}
