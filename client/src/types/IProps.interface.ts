import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { Cart } from "./Cart.interface";
import { Contents, LikeContents } from "./Contents.interface";
import { BuyProducts, IProducts, IProduct, Review } from "./Products.interface";
import { IUser } from "./User.interface";

export interface ReviewsComponent {
  review: [Review];
  selectReview: [Review];
  nowUser: [IUser];
  selectUserBuyItemList: [BuyProducts];
}

export interface IProductComponent {
  product: [IProduct];
  cartList: [Cart];
}
export interface ContentsComponent {
  contents: [Contents];
  comments: [Comment];
  likeContents: [LikeContents];
  nowUser: [IUser];
}
export interface ContentsDetailComponent {
  selectContents: [Contents];
  selectComment: [Comment];
  comments: [Review];
  likeContents: [LikeContents];
  nowUser: [IUser];
}
export interface CartComponent {
  cartList: [Cart];
  allUserBuyItemList: [BuyProducts];
  nowUser: [IUser];
}
export interface BuyModalComponent {
  selectItem: [IProduct];
  allUserBuyItemList: [BuyProducts];
  selectUserBuyItemList: [BuyProducts];
}
export interface RecentBIComponent {
  selectUserBuyItemList: [BuyProducts];
  nowUser: [IUser];
}
export interface SearchItem {
  item: [IProduct];
  items: IProduct[];
}

export interface IHomeChildComponentProps {
  data?: IProducts;
  countViews: (
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
