import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { Cart } from "./Cart.interface";
import { Contents, LikeContents } from "./Contents.interface";
import { BuyProducts, Product, Products, Review } from "./Products.interface";
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

export interface IHomeChildComponentProps {
  data: Products | undefined;
  countView: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}
