import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query Products {
    products {
      sId
      sName
      sPrice
      slideImg
      sView
      sCategory
    }
  }
`;
export const PRODUCT = gql`
  query Product($ProductId: Int!) {
    product(id: $productId) {
      sId
      sName
      sTitle
      sContents
      sPrice
      sLike
      sView
      sHalf_title
      slideImg
      mainTopImg
      mainMidImg
      mainBottomImg
    }
    nowUser {
      user_code
    }
    cartList {
      sName
      sPrice
      slideImg
    }
  }
`;

export const COUNT_VIEW = gql`
  mutation CountView($CountViewId: Int) {
    countView(id: $countViewId) {
      sId
    }
  }
`;
export const ADD_CART = gql`
  mutation AddCart(
    $cartId: Int!
    $sId: Int!
    $sName: String!
    $sPrice: Int!
    $bCount: Int!
    $slideImg: [String]!
    $check: Boolean!
  ) {
    addCart(
      cartId: $cartId
      sId: $sId
      sName: $sName
      sPrice: $sPrice
      bCount: $bCount
      slideImg: $slideImg
      check: $check
    ) {
      sId
      sName
      sPrice
      bCount
      slideImg
      check
    }
  }
`;
