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
} from "./styles/ProductReviews.style";
import useReviews from "./hooks/mutations/useReviews";
import {
  REVIEW_RATING,
  REVIEW_TEXT,
  USER_CODE,
} from "../../../constant/storageKey";
import getFormatDate from "../../../utils/getFormatDate";
import { Rating, Typography } from "@mui/material";
import useLocalStorage from "./hooks/custom/useLocalStorage";
const { Kakao } = window;

function Reviews({ data }: IProductReviewsComponent) {
  const { id } = useParams();
  const [textValue, setTextValue] = useLocalStorage(REVIEW_TEXT, "");
  const [ratingValue, setRatingValue] = useLocalStorage(REVIEW_RATING, 2);

  const { postReviews, deleteReviews } = useReviews();
  const reviewDate = getFormatDate(new Date());
  let reviewIndex = Number(data?.review.length);

  const itemBuyListCheck = 0;
  function enterSubmit(e: any) {
    if (e.key === "Enter") {
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
      localStorage.removeItem(REVIEW_TEXT);
      localStorage.removeItem(REVIEW_RATING);
      setTextValue("");
    }
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
            <WriteReviewButton
              placeholder="리뷰를 남겨주세요."
              onChange={({ target: { value } }) => setTextValue(value)}
              onKeyUp={(e) => enterSubmit(e)}
              value={textValue}
            />
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
    </>
  );
}

export default Reviews;
