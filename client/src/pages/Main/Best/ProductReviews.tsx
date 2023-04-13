import { IProductReviewsComponent } from "../../../types/IProps.interface";
import { useParams } from "react-router-dom";
import {
  FalseReviewButton,
  ReviewListContainer,
  NormalText,
  ReviewInforBox,
  ReviewsContainer,
  SubNormalText,
  WriteReviewButton,
  WriteReviewInput,
} from "./styles/ProductReviews.style";
import CreateIcon from "@mui/icons-material/Create";
import useReviews from "../../../services/products/hooks/mutations/useReviews";
import { USER_CODE } from "../../../constant/storageKey";
import getFormatDate from "../../../utils/getFormatDate";
import { Rating, Typography } from "@mui/material";
import FeedBack from "../../../components/SnackBar/FeedBack";
import { useState } from "react";
import getCreatedIndex from "../../../utils/getCreatedIndex";
import ProductReviewList from "./ProductReviewList";
const { Kakao } = window;

function Reviews({ data }: IProductReviewsComponent) {
  const { id } = useParams();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const {
    postReviews,
    updateReviews,
    deleteReviews,
    textValue,
    setTextValue,
    ratingValue,
    setRatingValue,
    feedBackMessage,
    editTextValue,
    setEditTextValue,
    editRatingValue,
    setEditRatingValue,
    isFetchCompleted,
  } = useReviews();
  let reviewIndex = getCreatedIndex(data?.review.map((ele) => ele.review_id));

  const itemBuyListCheck = 0;
  function postHandler() {
    postReviews({
      variables: {
        reviewId: (reviewIndex += 1),
        productsId: Number(id),
        kakaoId: Number(localStorage.getItem(USER_CODE)),
        reviewText: textValue,
        reviewRating: ratingValue,
        reviewDate: getFormatDate(new Date()),
      },
    });
    setOpenSnackBar(true);
  }

  return (
    <>
      <ReviewsContainer>
        <ReviewInforBox>
          <NormalText>리뷰 {data?.review.length} 건</NormalText>
        </ReviewInforBox>
        {!Kakao.Auth.getAccessToken() ? (
          <FalseReviewButton>로그인이 필요합니다.</FalseReviewButton>
        ) : itemBuyListCheck ? (
          <FalseReviewButton>구매 후 리뷰를 남겨주세요.</FalseReviewButton>
        ) : (
          <>
            <Typography component="legend">
              상품의 만족도는 어떠셨나요?
            </Typography>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />

            <WriteReviewInput
              fullWidth
              sx={{ mt: 1 }}
              id="review-text-field"
              label="리뷰를 남겨주세요."
              multiline
              rows={4}
              value={textValue ? textValue : ""}
              onChange={(e) => setTextValue(e.target.value)}
              color="warning"
            />
            <WriteReviewButton
              sx={{ mt: 1, mb: 3 }}
              fullWidth
              variant="contained"
              endIcon={<CreateIcon />}
              onClick={postHandler}
            >
              리뷰등록
            </WriteReviewButton>
          </>
        )}

        <ReviewListContainer>
          {Number(data?.review.length) === 0 ? (
            <SubNormalText>아직 리뷰가 없어요</SubNormalText>
          ) : (
            data?.review.map((element) => (
              <ProductReviewList
                key={element.review_id}
                review={element}
                updateReviews={updateReviews}
                deleteReviews={deleteReviews}
                setOpenSnackBar={setOpenSnackBar}
                editTextValue={editTextValue!}
                setEditTextValue={setEditTextValue}
                editRatingValue={editRatingValue!}
                setEditRatingValue={setEditRatingValue}
              />
            ))
          )}
        </ReviewListContainer>
      </ReviewsContainer>

      <FeedBack
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        feedBackMessage={feedBackMessage}
        isFetchCompleted={isFetchCompleted}
      />
    </>
  );
}

export default Reviews;
