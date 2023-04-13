import { gql } from "@apollo/client";

export const GET_CART = gql`
  query CartList {
    cartList {
      sName
      sId
      sPrice
      bCount
      slideImg
      cartId
      check
    }
    allUserBuyItemList {
      bId
      sId
      user_code
      bCount
    }
    nowUser {
      user_code
    }
  }
`;
export const UPDATE_COUNT = gql`
  mutation UpdateBCount($index: Int!, $bCount: Int) {
    updateBCount(index: $index, bCount: $bCount) {
      bCount
    }
  }
`;
export const BUY_ITEM = gql`
  mutation BuyItems($bId: Int!, $sId: Int!, $userCode: Int!, $bCount: Int!) {
    buyItems(bId: $bId, sId: $sId, user_code: $userCode, bCount: $bCount) {
      bId
    }
  }
`;
export const CHECK_ITEM = gql`
  mutation CheckedAddCart($index: Int!) {
    checkedAddCart(index: $index) {
      cartId
    }
  }
`;
export const UNCHECK_ITEM = gql`
  mutation CheckDeleteCart($index: Int!) {
    checkDeleteCart(index: $index) {
      cartId
    }
  }
`;
export const DELETE_CART = gql`
  mutation DeleteCartItem($cartId: Int) {
    deleteCartItem(cartId: $cartId) {
      cartId
    }
  }
`;
