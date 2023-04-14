import { gql } from "@apollo/client";

export const GET_CART = gql`
  query CartList {
    getCart {
      cart_id
      products_id
      products_name
      products_amount
      products_price
      products_slideImg
    }
  }
`;

export const ADD_CART = gql`
  mutation AddCart(
    $cartId: Float
    $productsId: Float
    $productsName: String
    $productsAmount: Float
    $productsPrice: Float
    $productsSlideImg: String
  ) {
    addCart(
      cart_id: $cartId
      products_id: $productsId
      products_name: $productsName
      products_amount: $productsAmount
      products_price: $productsPrice
      products_slideImg: $productsSlideImg
    ) {
      cart_id
      products_id
      products_name
      products_amount
      products_price
      products_slideImg
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
