export interface Product {
  products_id: number;
  products_name: string;
  products_title: string;
  products_contents: string;
  products_price: number;
  products_like: number;
  products_view: number;
  products_half_title: string;
  products_category: string;
  products_slideImg: [string];
  products_mainTopImg: [string];
  products_mainMidImg: [string];
  products_mainBottomImg: [string];
}
export interface Products {
  products: [Product];
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

export interface Review {
  rId: number;
  sId: number;
  user_code: number;
  rReview: string;
  rDate: string;
  kakao_nickname: string;
}
