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
import DeleteDialog from "../../../components/Dialog/DeleteDialog";
import UpdateDialog from "../../../components/Dialog/UpdateDialog";
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
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  return (
    <ReviewBox>
      <ReviewWriter>
        <UserName>{review.kakao_nickname}</UserName>
        {Kakao.Auth.getAccessToken() ? (
          <Box sx={{ display: "flex" }}>
            <ReviewUtilButton
              onClick={() =>
                isEditClick ? setOpenUpdateDialog(true) : setIsEditClick(true)
              }
            >
              {isEditClick ? "등록" : "수정"}
            </ReviewUtilButton>
            <ReviewUtilButton
              onClick={() =>
                isEditClick ? setIsEditClick(false) : setOpenDeleteDialog(true)
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

      <DeleteDialog
        id={review.review_id}
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        setIsEditClick={setIsEditClick}
        deleteReviews={deleteReviews}
      />
      <UpdateDialog
        id={review.review_id}
        openUpdateDialog={openUpdateDialog}
        setOpenUpdateDialog={setOpenUpdateDialog}
        setIsEditClick={setIsEditClick}
        updateReviews={updateReviews}
        editTextValue={editTextValue}
        editRatingValue={editRatingValue}
      />
    </ReviewBox>
  );
}

export default ProductReviewList;
