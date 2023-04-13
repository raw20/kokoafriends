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
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../custom/useLocalStorage";

function useReviews() {
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [feedBackMessage, setFeedBackMessage] = useState("");
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
  const prevFeedBackMessage = useRef(feedBackMessage);

  const [postReviews] = useMutation(POST_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      setTextValue("");
      setIsFetchCompleted(true);
      setFeedBackMessage("리뷰 등록이 완료되었습니다.");
      localStorage.removeItem(REVIEW_TEXT);
      localStorage.removeItem(REVIEW_RATING);
    },
    onError: () => {
      setFeedBackMessage("내용을 입력해주세요.");
      setIsFetchCompleted(false);
    },
  });

  const [updateReviews] = useMutation(UPDATE_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      setEditTextValue("");
      setIsFetchCompleted(true);
      setFeedBackMessage("리뷰를 수정하였습니다.");
    },
    onError: () => {
      setFeedBackMessage("수정에 실패하였습니다.");
      setIsFetchCompleted(false);
    },
  });

  const [deleteReviews] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: SELECTED_PRODUCT }, "Product"],
    onCompleted: () => {
      setIsFetchCompleted(true);
      setFeedBackMessage("리뷰를 삭제하였습니다.");
    },
    onError: () => {
      setFeedBackMessage("삭제에 실패하였습니다.");
      setIsFetchCompleted(false);
    },
  });

  useEffect(() => {
    prevFeedBackMessage.current = feedBackMessage;
  }, [feedBackMessage]);

  return {
    postReviews,
    updateReviews,
    deleteReviews,
    feedBackMessage,
    textValue,
    setTextValue,
    ratingValue,
    setRatingValue,
    editTextValue,
    setEditTextValue,
    editRatingValue,
    setEditRatingValue,
    isFetchCompleted,
  };
}

export default useReviews;
