import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { ICart } from "./Cart.interface";
import { Contents, LikeContents } from "./Contents.interface";
import { BuyProducts, IProducts, IProduct } from "./Products.interface";
import { IUser } from "./User.interface";
import { IReview } from "./Reviews.interface";
import { Dispatch, SetStateAction } from "react";

export interface IProductComponent {
  product: [IProduct];
  review: [IReview];
  reviews: [IReview];
}

export interface IProductReviewsComponent {
  data?: IProductComponent;
}

export interface IProductReviewListComponent {
  review: IReview;
  updateReviews: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  deleteReviews: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  editTextValue: string;
  setEditTextValue: Dispatch<SetStateAction<string | null>>;
  editRatingValue: number;
  setEditRatingValue: Dispatch<SetStateAction<number | null>>;
}

export interface ICommonPropsDialog {
  id: number;
  setIsEditClick: Dispatch<SetStateAction<boolean>>;
}

export interface IDeleteDialogComponent extends ICommonPropsDialog {
  deleteReviews: (
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

export interface IUpdateDialogComponent extends ICommonPropsDialog {
  updateReviews: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  editTextValue: string;
  editRatingValue: number;
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

export interface ICartListComponent {
  cartElement: ICart;
  isAllchecked: boolean;
  setIsAllchecked: Dispatch<SetStateAction<boolean>>;
  productId: number[];
  setProductId: Dispatch<SetStateAction<number[]>>;
}

///// 추후 수정예정인 인터페이스
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
