import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query Products {
    products {
      products_id
      products_name
      products_title
      products_contents
      products_price
      products_like
      products_view
      products_half_title
      products_category
      products_slideImg
      products_mainTopImg
      products_mainMidImg
      products_mainBottomImg
    }
  }
`;
export const COUNT_VIEW = gql`
  mutation CountView($CountViewId: Int) {
    countView(id: $countViewId) {
      products_id
    }
  }
`;
