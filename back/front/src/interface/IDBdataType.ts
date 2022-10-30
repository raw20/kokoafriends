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
}
export interface AllContents {
  contents: [Contents];
}
export interface SelectConObj {
  selectContents: [Contents];
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
  id: number;
  contents_id: number;
  user_id: number;
  writer: User;
  comment: string;
  date: string;
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
  nowUser: [User];
  allUserBuyItemList: [BuyItem];
}
export interface RecentBIComponent {
  selectUserBuyItemList: [BuyItem];
  nowUser: [User];
}
export interface SearchItem {
  item: [Item];
  items: Item[];
}
