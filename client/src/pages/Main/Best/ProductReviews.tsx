import { IProductReviewsComponent } from "../../../types/IProps.interface";
import { useParams } from "react-router-dom";
import {
  FalseReviewButton,
  ItemReviewList,
  NormalText,
  ReViewContent,
  ReviewBox,
  ReviewDate,
  ReviewDeleteButton,
  ReviewInforBox,
  ReviewRate,
  ReviewText,
  ReviewWriter,
  ReviewsContainer,
  SubNormalText,
  UserName,
  WriteReviewButton,
  WriteReviewInput,
} from "./styles/ProductReviews.style";
import CreateIcon from "@mui/icons-material/Create";
import useReviews from "./hooks/mutations/useReviews";
import { USER_CODE } from "../../../constant/storageKey";
import getFormatDate from "../../../utils/getFormatDate";
import { Rating, Typography } from "@mui/material";
import FeedBack from "../../../components/SnackBar/FeedBack";
import { useState } from "react";
import getCreatedIndex from "../../../utils/getCreatedIndex";
const { Kakao } = window;

function Reviews({ data }: IProductReviewsComponent) {
  const { id } = useParams();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const {
    postReviews,
    deleteReviews,
    textValue,
    setTextValue,
    ratingValue,
    setRatingValue,
    feedBackMessage,
  } = useReviews();

  const reviewDate = getFormatDate(new Date());
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
        reviewDate: reviewDate,
      },
    });
    setOpenSnackBar(true);
  }
  function deleteHandler(id: number) {
    deleteReviews({
      variables: {
        deleteReviewId: id,
      },
    });
    alert("상품평이 삭제되었습니다.");
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

        <ItemReviewList>
          {Number(data?.review.length) === 0 ? (
            <SubNormalText>아직 리뷰가 없어요</SubNormalText>
          ) : (
            data?.review.map((element) => (
              <ReviewBox key={element.review_id}>
                <ReviewWriter>
                  <UserName>{element.kakao_nickname}</UserName>
                  {Kakao.Auth.getAccessToken() ? (
                    <ReviewDeleteButton
                      onClick={() => deleteHandler(element.review_id)}
                    >
                      삭제
                    </ReviewDeleteButton>
                  ) : null}
                </ReviewWriter>

                <ReviewRate>
                  <Rating
                    name="read-only"
                    value={element.review_rating}
                    readOnly
                  />
                  <ReviewDate>{String(element.review_date)}</ReviewDate>
                </ReviewRate>
                <ReViewContent>
                  <ReviewText>{element.review_text}</ReviewText>
                </ReViewContent>
              </ReviewBox>
            ))
          )}
        </ItemReviewList>
      </ReviewsContainer>

      <FeedBack
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        feedBackMessage={feedBackMessage}
      />
    </>
  );
}

export default Reviews;
