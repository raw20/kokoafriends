import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { Cart } from "./Cart.interface";
import { Contents, LikeContents } from "./Contents.interface";
import { BuyProducts, IProducts, IProduct } from "./Products.interface";
import { IUser } from "./User.interface";
import { IReview } from "./Reviews.interface";
import { Dispatch, SetStateAction } from "react";

export interface IProductComponent {
  product: [IProduct];
  review: [IReview];
}

export interface IProductReviewsComponent {
  data?: IProductComponent;
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
  comments: [IReview];
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

export interface IFeedbackProps {
  openSnackBar: boolean;
  setOpenSnackBar: Dispatch<SetStateAction<boolean>>;
  feedBackMessage: string;
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
