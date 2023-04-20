import { ICart } from "../types/Cart.interface";

function getProductsPrice(data: ICart[]) {
  const price = data
    ?.map((element) => element.products_price * element.products_amount)
    .reduce((a: number, b: number) => a + b, 0);

  return price;
}

export default getProductsPrice;
