export interface Item {
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
export interface AllItem {
  item: [Item];
}

export interface Contents {
  cId: number;
  cWriter: string;
  cProfileImg: string;
  cImage: string;
  cTitle: string;
  cContent: string;
  cDate: string;
  cLike: string;
  kakao_nickname: [string];
  comment: [string];
}

export interface Review {
  rId: number;
  sId: number;
  user_code: number;
  rReview: string;
  rDate: string;
  kakao_nickname: string;
}
export interface ReviewsComponent {
  review: [Review];
  selectReview: [Review];
  nowUser: [User];
  selectUserBuyItemList: [BuyItem];
}
export interface Comment {
  tId: number;
  cId: number;
  user_code: number;
  comment: string;
  kakao_nickname: string;
  co_date: string;
}
export interface User {
  user_code: number;
  kakao_id: string;
  kakao_profile_img: string;
  kakao_nickname: string;
  kakao_email: string;
  user_role: string;
}
export interface BuyItem {
  bId: number;
  sId: number;
  user_code: number;
  bDate: string;
  sName: String;
  sPrice: number;
  bCount: number;
  slideImg: [string];
  cartId: number;
}
export interface LikeContents {
  lId: number;
  user_code: number;
  cId: number;
  like_check: number;
}
export interface MyProfile {
  nowUser: [User];
}
export interface ItemDetailComponent {
  selectItem: [Item];
  nowUser: [User];
  cartList: [BuyItem];
}
export interface ContentsComponent {
  contents: [Contents];
  comments: [Comment];
  likeContents: [LikeContents];
  nowUser: [User];
}
export interface ContentsDetailComponent {
  selectContents: [Contents];
  selectComment: [Comment];
  comments: [Review];
  likeContents: [LikeContents];
  nowUser: [User];
}
export interface CartComponent {
  cartList: [BuyItem];
  allUserBuyItemList: [BuyItem];
  nowUser: [User];
}
export interface BuyModalComponent {
  selectItem: [Item];
  allUserBuyItemList: [BuyItem];
  selectUserBuyItemList: [BuyItem];
}
export interface RecentBIComponent {
  selectUserBuyItemList: [BuyItem];
  nowUser: [User];
}
export interface SearchItem {
  item: [Item];
  items: Item[];
}
