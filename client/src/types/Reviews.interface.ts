export interface IReview {
  review_id: number;
  products_id: number;
  kakao_id: number;
  review_text: string;
  review_rating: number;
  review_date: Date;
  kakao_nickname: string;
}

export interface IReviews {
  reviews: [IReview];
}
