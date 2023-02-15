export interface Product {
  sId: number;
  sName: string;
  sTitle: string;
  sContents: string;
  sPrice: number;
  sLike: number;
  sView: number;
  sHalf_title: string;
  sComment: string;
  sCategory: string;
  slideImg: [string];
  mainTopImg: [string];
  mainMidImg: [string];
  mainBottomImg: [string];
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
