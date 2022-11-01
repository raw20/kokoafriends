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
export interface SelectItemObj {
  selectItem: [Item];
  nowUser: [User];
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
export interface AllContents {
  contents: [Contents];
  comments: [Comment];
}
export interface SelectConObj {
  selectContents: [Contents];
  selectComment: [Comment];
  comments: [Review];
  nowUser: [User];
}
export interface Review {
  rId: number;
  sId: number;
  user_code: number;
  rReview: string;
  rDate: string;
  kakao_nickname: string;
}
export interface ReviewObj {
  review: [Review];
  selectReview: [Review];
  nowUser: [User];
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
  slideImg: [string];
}
export interface MyProfile {
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
