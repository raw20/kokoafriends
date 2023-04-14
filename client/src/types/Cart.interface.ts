export interface ICart {
  cart_id: number;
  products_id: number;
  products_name: string;
  products_amount: number;
  products_price: number;
  products_slideImg: string;
}

export interface ICartList {
  getCart: [ICart];
}
