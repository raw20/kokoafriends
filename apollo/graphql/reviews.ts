import * as jf from "joiful";
import {
  Arg,
  ObjectType,
  Field,
  Resolver,
  Mutation,
  Int,
  Query,
  ArgsType,
  Args,
} from "type-graphql";
import {
  deleteReview,
  postReview,
  reviewById,
  reviews,
} from "../db/reviews.js";

@ObjectType()
class Reviews {
  @Field({ nullable: true })
  review_id: number;

  @Field({ nullable: true })
  products_id: number;

  @Field({ nullable: true })
  kakao_id: number;

  @Field({ nullable: true })
  review_text: string;

  @Field({ nullable: true })
  review_rating: number;

  @Field({ nullable: true })
  review_date: Date;
}

@ArgsType()
export class PostReviewArgs {
  @Field({ nullable: true })
  @jf.number().required().min(0)
  review_id: number;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  products_id: number;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  kakao_id: number;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  review_text: string;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  review_rating: number;

  @Field({ nullable: true })
  @jf.date().required().min(0)
  review_date: Date;
}

@Resolver(Reviews)
export class ReviewsResolver {
  @Query(() => [Reviews])
  reviews() {
    return reviews();
  }

  @Query(() => [Reviews])
  review(@Arg("id", () => Int) id: number) {
    return reviewById(id);
  }

  @Mutation(() => Reviews)
  postReview(@Args() review: PostReviewArgs) {
    postReview(
      review.review_id,
      review.products_id,
      review.kakao_id,
      review.review_text,
      review.review_rating,
      review.review_date
    );
    return { review_id: review.review_id };
  }

  @Mutation(() => Reviews)
  deleteReview(@Arg("id") id: number) {
    return deleteReview(id);
  }
}
