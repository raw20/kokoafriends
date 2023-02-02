import { Cart } from "./Cart.interface";
import { Contents, LikeContents } from "./Contents.interface";
import { BuyProducts, Product, Review } from "./Products.interface";
import { User } from "./User.interface";

export interface ReviewsComponent {
  review: [Review];
  selectReview: [Review];
  nowUser: [User];
  selectUserBuyItemList: [BuyProducts];
}

export interface ProductComponent {
  Product: Product;
  cartList: [Cart];
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
  cartList: [Cart];
  allUserBuyItemList: [BuyProducts];
  nowUser: [User];
}
export interface BuyModalComponent {
  selectItem: [Product];
  allUserBuyItemList: [BuyProducts];
  selectUserBuyItemList: [BuyProducts];
}
export interface RecentBIComponent {
  selectUserBuyItemList: [BuyProducts];
  nowUser: [User];
}
export interface SearchItem {
  item: [Product];
  items: Product[];
}
