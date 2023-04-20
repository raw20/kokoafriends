import { makeVar } from "@apollo/client";
import { ICart } from "../types/Cart.interface";
import { CART_LIST } from "../constant/storageKey";
import getCreatedIndex from "../utils/getCreatedIndex";

export const localCartList = JSON.parse(localStorage.getItem(CART_LIST)!) || [];
export const cartList = makeVar<ICart[]>(localCartList);

export function addCart(
  products_id: number,
  products_name: string,
  products_amount: number,
  products_price: string,
  products_slideImg: string
) {
  const currentCartItem = cartList();
  let cartIndex = getCreatedIndex(
    currentCartItem.map((element) => element.cart_id)
  );
  const newCartItem = {
    cart_id: cartIndex + 1,
    products_id: products_id,
    products_name: products_name,
    products_amount: products_amount,
    products_price: Number(products_price.split(",").join("")),
    products_slideImg: products_slideImg,
  };
  cartList([...currentCartItem, newCartItem]);
  localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}

export function deleteCart(productId: number | number[]) {
  const currentCartItem = [...cartList()];

  if (typeof productId === "object") {
    const filterCartItem = currentCartItem.filter(
      (element) => !productId.includes(element.products_id)
    );
    cartList(filterCartItem);
    localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
  }
  const deleteIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );

  if (deleteIndex === -1) return;

  currentCartItem.splice(deleteIndex, 1);
  cartList(currentCartItem);
  localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}

export function amoutInput(productId: number, amount: number) {
  if (amount === 0) amount = 1;
  const currentCartItem = [...cartList()];
  const findIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );
  currentCartItem[findIndex].products_amount = amount;
  cartList(currentCartItem);
  localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}

export function amountMinus(productId: number) {
  const currentCartItem = [...cartList()];
  const findIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );
  if (currentCartItem[findIndex].products_amount > 1)
    currentCartItem[findIndex].products_amount -= 1;

  cartList(currentCartItem);
  localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}

export function amountPlus(productId: number) {
  const currentCartItem = [...cartList()];
  const findIndex = currentCartItem.findIndex(
    (element) => element.products_id === productId
  );
  if (currentCartItem[findIndex].products_amount > 0)
    currentCartItem[findIndex].products_amount += 1;

  cartList(currentCartItem);
  localStorage.setItem(CART_LIST, JSON.stringify(cartList()));
}
