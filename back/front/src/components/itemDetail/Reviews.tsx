import styled from "styled-components";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ReviewsComponent } from "../../interface/IDBdataType";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface IReviewsProps {
  userCode: number | undefined;
}

const GET_REVIEW = gql`
  query SelectReview($reviewId: Int!, $userCode: Int!) {
    selectReview(id: $reviewId) {
      rReview
      user_code
      sId
      rId
      rDate
      kakao_nickname
    }
    review {
      rId
    }
    nowUser {
      user_code
    }
    selectUserBuyItemList(user_code: $userCode) {
      user_code
      sId
    }
  }
`;
const POST_REVIEW = gql`
  mutation PostReviews(
    $rId: Int!
    $sId: Int!
    $userCode: Int!
    $rReview: String!
  ) {
    postReviews(rId: $rId, sId: $sId, user_code: $userCode, rReview: $rReview) {
      rId
      sId
      user_code
      rReview
      kakao_nickname
      rDate
    }
  }
`;
const DELETE_REVIEW = gql`
  mutation DeleteReviews($deleteReviewsId: Int!) {
    deleteReviews(id: $deleteReviewsId) {
      rId
    }
  }
`;
const ItemReview = styled.div`
  width: 100%;
  height: auto;
  margin: 2.5rem auto 4rem;
  border-top: 1px solid ${(props) => props.theme.secondColor};
`;
const ItemReviewInform = styled.div`
  width: 100%;
  margin: 1rem 0;
`;
const FalseReviewButton = styled.span`
  width: 100%;
  height: 40px;
  margin: 1rem auto;
  display: flex;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  align-items: center;
  border: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.bgColor};
  font-family: "Noto Sans KR", sans-serif;
  padding-left: 1rem;
`;
const WriteReviewButton = styled.input`
  width: 100%;
  height: 40px;
  margin: 1rem auto;
  display: flex;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  align-items: center;
  border: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.bgColor};
  font-family: "Noto Sans KR", sans-serif;
  padding-left: 1rem;
`;
const ItemReviewList = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${(props) => props.theme.accentColor};
`;
const ReviewBox = styled.div`
  width: 100%;
  height: auto;
  font-family: "Noto Sans KR", sans-serif;
`;
const ReviewWriter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const ReviewRate = styled(ReviewWriter)``;
const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
const ReViewContent = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;
const NormalText = styled.p`
  font-size: 2.1rem;
`;
const SubNormalText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
`;
const UserReview = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const ReviewDate = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondColor};
`;
const DeleteButton = styled.span`
  width: 35px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.secondColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
export const BuyButton = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 1.4rem;
  position: sticky;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
function Reviews({ userCode }: IReviewsProps) {
  const { id } = useParams();
  const token = window.localStorage.getItem("token");
  const { data } = useQuery<ReviewsComponent>(GET_REVIEW, {
    variables: {
      reviewId: Number(id),
      userCode: userCode,
    },
  });
  const reviewIndex = Number(data?.review.length);
  const [input, setInput] = useState<string>("");
  const [postReviews] = useMutation(POST_REVIEW, {
    refetchQueries: [{ query: GET_REVIEW }, "SelectReview"],
  });
  const [deleteReviews] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_REVIEW }, "SelectReview"],
  });
  const myUserCode = Number(data?.nowUser.map((user) => user.user_code));
  const itemBuyListCheck = data?.selectUserBuyItemList.filter(
    (ele) => ele.sId === Number(id)
  );
  function enterSubmit(e: any) {
    if (e.key === "Enter") {
      postReviews({
        variables: {
          rId: reviewIndex + 1,
          sId: Number(id),
          userCode: myUserCode,
          rReview: input,
        },
      });
      setInput("");
    }
  }
  function deleteHandler(id: number) {
    deleteReviews({
      variables: {
        deleteReviewsId: id,
      },
    });
    alert("상품평이 삭제되었습니다.");
  }
  return (
    <>
      <ItemReview>
        <ItemReviewInform>
          <NormalText>리뷰 {data?.selectReview.length} 건</NormalText>
        </ItemReviewInform>
        {!token ? (
          <FalseReviewButton>로그인이 필요합니다.</FalseReviewButton>
        ) : itemBuyListCheck?.length === 0 ? (
          <FalseReviewButton>구매 후 리뷰를 남겨주세요.</FalseReviewButton>
        ) : (
          <WriteReviewButton
            placeholder="리뷰를 남겨주세요."
            onChange={({ target: { value } }) => setInput(value)}
            onKeyUp={(e) => enterSubmit(e)}
            value={input}
          />
        )}

        <ItemReviewList>
          {Number(data?.selectReview.length) === 0 ? (
            <SubNormalText>아직 리뷰가 없어요</SubNormalText>
          ) : (
            data?.selectReview.map((item) => (
              <ReviewBox key={item.rId}>
                <ReviewWriter>
                  <UserName>{item.kakao_nickname}</UserName>
                  {item.user_code === myUserCode && token ? (
                    <DeleteButton onClick={() => deleteHandler(item.rId)}>
                      삭제
                    </DeleteButton>
                  ) : null}
                </ReviewWriter>
                <ReviewRate>
                  <ReviewDate>{item.rDate}</ReviewDate>
                </ReviewRate>
                <ReViewContent>
                  <UserReview>{item.rReview}</UserReview>
                </ReViewContent>
              </ReviewBox>
            ))
          )}
        </ItemReviewList>
      </ItemReview>
    </>
  );
}

export default Reviews;
