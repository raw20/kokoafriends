import { useMutation } from "@apollo/client";
import {
  DELETE_REVIEW,
  POST_REVIEW,
  SELECTED_PRODUCT,
} from "../../graphql/schema";

function useReviews() {
  const [postReviews] = useMutation(POST_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
  });
  const [deleteReviews] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
  });

  return { postReviews, deleteReviews };
}

export default useReviews;
