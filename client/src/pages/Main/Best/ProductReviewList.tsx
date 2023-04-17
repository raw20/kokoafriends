import {
  ReViewContent,
  ReviewBox,
  ReviewDate,
  ReviewRate,
  ReviewText,
  ReviewUtilButton,
  ReviewWriter,
  UserName,
  WriteEditReviewInput,
} from "./styles/ProductReviews.style";
import { Box, Rating } from "@mui/material";
import { IProductReviewListComponent } from "../../../types/IProps.interface";
import { useState } from "react";
import DeleteReviewDialog from "../../../components/Dialog/DeleteReviewDialog";
import UpdateReviewDialog from "../../../components/Dialog/UpdateReviewDialog";
import {
  isOpenUpdateReviewDialogVar,
  isOpenDeleteReviewDialogVar,
} from "../../../store/dialog";
const { Kakao } = window;

function ProductReviewList({
  review,
  updateReviews,
  deleteReviews,
  editTextValue,
  setEditTextValue,
  editRatingValue,
  setEditRatingValue,
}: IProductReviewListComponent) {
  const [isEditClick, setIsEditClick] = useState(false);

  return (
    <ReviewBox>
      <ReviewWriter>
        <UserName>{review.kakao_nickname}</UserName>
        {Kakao.Auth.getAccessToken() ? (
          <Box sx={{ display: "flex" }}>
            <ReviewUtilButton
              onClick={() =>
                isEditClick && editTextValue !== ""
                  ? isOpenUpdateReviewDialogVar(true)
                  : setIsEditClick(true)
              }
            >
              {isEditClick ? "등록" : "수정"}
            </ReviewUtilButton>
            <ReviewUtilButton
              onClick={() =>
                isEditClick
                  ? setIsEditClick(false)
                  : isOpenDeleteReviewDialogVar(true)
              }
            >
              {isEditClick ? "취소" : "삭제"}
            </ReviewUtilButton>
          </Box>
        ) : null}
      </ReviewWriter>

      <ReviewRate>
        <Rating
          name="review-rating"
          value={isEditClick ? editRatingValue : review.review_rating}
          readOnly={!isEditClick}
          onChange={(event, newValue) => {
            setEditRatingValue(newValue);
          }}
        />
        <ReviewDate>{String(review.review_date)}</ReviewDate>
      </ReviewRate>
      <ReViewContent>
        {isEditClick ? (
          <WriteEditReviewInput
            fullWidth
            sx={{ mt: 1 }}
            id="review-edit-text-field"
            label="리뷰를 수정할 수 있어요"
            multiline
            rows={4}
            value={editTextValue}
            onChange={(e) => setEditTextValue(e.target.value)}
            color="warning"
          />
        ) : (
          <ReviewText>{review.review_text}</ReviewText>
        )}
      </ReViewContent>

      <DeleteReviewDialog
        id={review.review_id}
        setIsEditClick={setIsEditClick}
        deleteReviews={deleteReviews}
      />
      <UpdateReviewDialog
        id={review.review_id}
        setIsEditClick={setIsEditClick}
        updateReviews={updateReviews}
        editTextValue={editTextValue}
        editRatingValue={editRatingValue}
      />
    </ReviewBox>
  );
}

export default ProductReviewList;
