export interface IProduct {
  products_id: number;
  products_name: string;
  products_title: string;
  products_contents: string;
  products_price: string;
  products_like: number;
  products_view: number;
  products_banner_status: boolean;
  products_new_status: boolean;
  products_half_title: string;
  products_category: string;
  products_slideImg: string;
  products_mainTopImg: string;
  products_mainMidImg: string;
  products_mainBottomImg: string;
}
export interface IProducts {
  products: [IProduct];
}

export interface BuyProducts {
  bId: number;
  sId: number;
  user_code: number;
  bDate: string;
  sName: string;
  sPrice: number;
  bCount: number;
  slideImg: [string];
}
