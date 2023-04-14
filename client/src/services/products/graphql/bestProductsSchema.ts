import { gql } from "@apollo/client";

export const BEST_PRODUCTS = gql`
  query Products {
    products {
      products_id
      products_name
      products_price
      products_slideImg
      products_view
      products_category
    }
  }
`;

export const SELECTED_PRODUCT = gql`
  query Product($productId: Int!) {
    product(id: $productId) {
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
    review(id: $productId) {
      review_id
      products_id
      kakao_id
      review_text
      review_rating
      review_date
      kakao_nickname
    }
  }
`;

export const COUNT_VIEW = gql`
  mutation CountViews($countViewsId: Int!) {
    countViews(id: $countViewsId) {
      products_id
    }
  }
`;

export const POST_REVIEW = gql`
  mutation PostReview(
    $reviewId: Float
    $productsId: Float
    $kakaoId: Float
    $reviewText: String
    $reviewRating: Float
    $reviewDate: DateTime
  ) {
    postReview(
      review_id: $reviewId
      products_id: $productsId
      kakao_id: $kakaoId
      review_text: $reviewText
      review_rating: $reviewRating
      review_date: $reviewDate
    ) {
      review_id
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview(
    $reviewId: Float
    $reviewText: String
    $reviewRating: Float
    $reviewDate: DateTime
  ) {
    updateReview(
      review_id: $reviewId
      review_text: $reviewText
      review_rating: $reviewRating
      review_date: $reviewDate
    ) {
      review_id
      products_id
      kakao_id
      review_text
      review_rating
      review_date
      kakao_nickname
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: Float!) {
    deleteReview(id: $deleteReviewId) {
      review_id
    }
  }
`;
