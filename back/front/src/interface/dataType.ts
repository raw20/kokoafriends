export interface Item {
  id: number;
  name: string;
  title: string;
  bannerImg: string;
  contents: string;
  price: number;
  like: number;
  view: number;
  reviews: Review[];
  comment: string;
  category: string;
  slideImg: [string];
  mainTopImg: [string];
  mainMidImg: [string];
  mainBottomImg: [string];
}
export interface Contents {
  id: number;
  writer: string;
  profileImg: string;
  image: string;
  title: string;
  content: string;
  date: string;
  like: number;
  comments: Comment[];
}
export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  writer: User;
  comment: string;
  date: string;
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
  id: number;
  kakaoId: string;
  name: string;
}
export interface ItemObj {
  item: Item[];
}
export interface AllItem {
  item: Item[];
  allUser: User[];
}
export interface SearchItem {
  searchData: Item[];
}
export interface SelectItemObj {
  selectItem(id: number): Item[];
}
export interface ContentsObj {
  contents: Contents[];
}
export interface AllUser {
  allUser: User[];
}
export interface SelectConObj {
  selectContents(selectContentsId: number): Contents[];
}
