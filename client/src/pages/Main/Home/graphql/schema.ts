import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query Products {
    products {
      sId
      sName
      sTitle
      sContents
      sPrice
      sView
      slideImg
      mainBottomImg
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
