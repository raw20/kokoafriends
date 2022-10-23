import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const GET_ITEM = gql`
  query SelectItem($selectItemId: Int!) {
    selectItem(id: $selectItemId) {
      id
      name
      title
      contents
      price
      like
      view
      reviews {
        id
        product_id
        kakaoId
        writer {
          id
          kakaoId
          name
        }
        review
        date
      }
      half_title
      slideImg
      mainTopImg
      mainMidImg
      mainBottomImg
    }
    aboutMe {
      kakaoId
      name
    }
  }
`;
const POST_REVIEW = gql`
  mutation PostReview($kakaoId: String!, $productId: Int!, $review: String!) {
    postReview(kakaoId: $kakaoId, product_id: $productId, review: $review) {
      id
      product_id
      kakaoId
      writer {
        id
        kakaoId
        name
      }
      review
      date
    }
  }
`;
const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: Int!) {
    deleteReview(id: $deleteReviewId) {
      id
    }
  }
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
`;
const Inner = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const ItemImgSlider = styled(Slider)`
  width: 100%;
  height: auto;
  .slick-list {
    width: 100%;
    margin: 1rem auto;
  }
`;
const ItemSlideImg = styled.img`
  width: 620px;
  height: 620px;
`;

const ItemImformationTop = styled.div`
  width: 100%;
  height: auto;
  margin: 4.5rem auto 0;
  display: flex;
  justify-content: space-between;
`;

const ItemImformationBottom = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
const Itemtitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;
`;
const ItemName = styled(Itemtitle)`
  font-size: 2.1rem;
`;
const ItemLike = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;
const Itemtext = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
`;
const ItemViews = styled(Itemtext)`
  font-size: 1.2rem;
`;
const ItemContents = styled.div`
  width: 100%;
  height: auto;
  margin: 3.5rem auto;
`;
const ItemImg = styled.img`
  width: 100%;
  height: auto;
  margin: 1rem auto;
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
const UserReview = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const ReviewDate = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondColor};
`;
const BuyButtonArea = styled.div`
  width: 100%;
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
const BuyButton = styled.div`
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
`;

function ItemDetail() {
  const token = window.localStorage.getItem("token");
  const { id } = useParams();
  const { data } = useQuery(GET_ITEM, {
    variables: {
      selectItemId: Number(id),
    },
  });
  const myKakaoId = data?.aboutMe.map((me: any) => me.kakaoId).join();
  const [postReview] = useMutation(POST_REVIEW, {
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
  });
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
  });
  const [review, setReview] = useState<string>("");

  function enterSubmit(e: any) {
    if (e.key === "Enter") {
      postReview({
        variables: {
          kakaoId: myKakaoId,
          productId: data?.selectItem.id,
          review: review,
        },
      });
      setReview("");
    }
  }
  function deleteHandler(id: number) {
    deleteReview({
      variables: {
        deleteReviewId: id,
      },
    });
    alert("상품평이 삭제되었습니다.");
  }
  return (
    <Wrap>
      <Inner>
        <ItemImgSlider {...settings}>
          {data?.selectItem.slideImg.map((item: string, index: number) => (
            <ItemSlideImg key={index} src={`/img/product/${item}`} />
          ))}
        </ItemImgSlider>
        <ItemImformationTop>
          <ItemName>{data?.selectItem.name}</ItemName>
          <ItemLike>{data?.selectItem.like}</ItemLike>
        </ItemImformationTop>
        <ItemImformationBottom>
          <Itemtext>{data?.selectItem.price}원</Itemtext>
          <ItemViews>{data?.selectItem.view}번 조회되었습니다.</ItemViews>
        </ItemImformationBottom>
        <BuyButtonArea>
          <ItemContents>
            {data?.selectItem.half_title
              .split("\n")
              .map((line: string, index: number) => (
                <Itemtitle key={index}>
                  {line}
                  <br />
                </Itemtitle>
              ))}
            {data?.selectItem.contents
              .split("\n")
              .map((line: string, index: number) => (
                <Itemtext key={index}>
                  {line}
                  <br />
                </Itemtext>
              ))}
            {data?.selectItem.mainTopImg.map((img: string, index: number) => (
              <ItemImg key={index} src={`/img/product/${img}`} />
            ))}
            <Itemtext>이렇게 귀여운 카카오프렌즈샵 제품입니다.</Itemtext>
            {data?.selectItem.mainMidImg.map((img: string, index: number) => (
              <ItemImg key={index} src={`/img/product/${img}`} />
            ))}
            <Itemtext>지금 당장 카카오프렌즈를 만나보세요.</Itemtext>
            {data?.selectItem.mainBottomImg.map(
              (img: string, index: number) => (
                <ItemImg key={index} src={`/img/product/${img}`} />
              )
            )}
            <Itemtitle>구성품</Itemtitle>
            <Itemtext>건진지 외 필요한거 여러개</Itemtext>
          </ItemContents>
          <ItemReview>
            <ItemReviewInform>
              <ItemName>리뷰 {data?.selectItem.reviews.length} 건</ItemName>
            </ItemReviewInform>
            <WriteReviewButton
              placeholder="리뷰를 남겨주세요."
              onChange={({ target: { value } }) => setReview(value)}
              onKeyUp={(e) => enterSubmit(e)}
              value={review}
            />
            <ItemReviewList>
              {data?.selectItem.reviews.map((item: any) => (
                <ReviewBox key={item.id}>
                  <ReviewWriter>
                    <UserName>{item.writer.name}</UserName>
                    {item.kakaoId === myKakaoId && token ? (
                      <DeleteButton onClick={() => deleteHandler(item.id)}>
                        삭제
                      </DeleteButton>
                    ) : null}
                  </ReviewWriter>
                  <ReviewRate>
                    <ReviewDate>{item.date}</ReviewDate>
                  </ReviewRate>
                  <ReViewContent>
                    <UserReview>{item.review}</UserReview>
                  </ReViewContent>
                </ReviewBox>
              ))}
            </ItemReviewList>
          </ItemReview>
          <BuyButton>구매하기</BuyButton>
        </BuyButtonArea>
      </Inner>
    </Wrap>
  );
}

export default ItemDetail;
