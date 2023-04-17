import { useMutation } from "@apollo/client";
import {
  DELETE_REVIEW,
  POST_REVIEW,
  SELECTED_PRODUCT,
  UPDATE_REVIEW,
} from "../../graphql/bestProductsSchema";
import {
  REVIEW_EDIT_RATING,
  REVIEW_EDiT_TEXT,
  REVIEW_RATING,
  REVIEW_TEXT,
} from "../../../../constant/storageKey";
import useLocalStorage from "../custom/useLocalStorage";
import {
  feedbackMessageVar,
  isFetchCompletedVar,
} from "../../../../store/snackbar";

function useReviews() {
  const [textValue, setTextValue] = useLocalStorage(REVIEW_TEXT, "");
  const [ratingValue, setRatingValue] = useLocalStorage(REVIEW_RATING, 2);
  const [editTextValue, setEditTextValue] = useLocalStorage(
    REVIEW_EDiT_TEXT,
    ""
  );
  const [editRatingValue, setEditRatingValue] = useLocalStorage(
    REVIEW_EDIT_RATING,
    2
  );

  const [postReviews] = useMutation(POST_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      setTextValue("");
      isFetchCompletedVar(true);
      feedbackMessageVar("리뷰 등록이 완료되었습니다.");
      localStorage.removeItem(REVIEW_TEXT);
      localStorage.removeItem(REVIEW_RATING);
    },
    onError: () => {
      feedbackMessageVar("내용을 입력해주세요.");
      isFetchCompletedVar(false);
    },
  });

  const [updateReviews] = useMutation(UPDATE_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      setEditTextValue("");
      isFetchCompletedVar(true);
      feedbackMessageVar("리뷰를 수정하였습니다.");
    },
    onError: () => {
      feedbackMessageVar("수정에 실패하였습니다.");
      isFetchCompletedVar(false);
    },
  });

  const [deleteReviews] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      isFetchCompletedVar(true);
      feedbackMessageVar("리뷰를 삭제하였습니다.");
    },
    onError: () => {
      feedbackMessageVar("삭제에 실패하였습니다.");
      isFetchCompletedVar(false);
    },
  });

  return {
    postReviews,
    updateReviews,
    deleteReviews,
    textValue,
    setTextValue,
    ratingValue,
    setRatingValue,
    editTextValue,
    setEditTextValue,
    editRatingValue,
    setEditRatingValue,
  };
}

export default useReviews;
