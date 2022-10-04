import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_BEST_ITEM = gql`
  query ($selectBestItemId: Int!) {
    selectBestItem(id: $selectBestItemId) {
      id
      name
      title
      bannerImg
      contents
      price
      like
      view
      comment
      slideImg
      mainTopImg
      mainMidImg
      mainBottomImg
    }
  }
`;
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
`;
const ItemImgSlider = styled(Slider)`
  width: 100%;
  height: auto;
  .slick-list {
    width: 30%;
    margin: 1rem auto;
  }
`;
const ItemSlideImg = styled.img`
  width: 620px;
  height: auto;
`;

const ItemImformationTop = styled.div`
  width: 30%;
  height: auto;
  margin: 3.5rem auto 0;
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
`;

const ItemImformationBottom = styled.div`
  width: 30%;
  height: auto;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ItemName = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`;
const ItemLike = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;
const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;
const ItemViews = styled(ItemPrice)`
  font-size: 0.9rem;
`;
function ProductItem() {
  const { id } = useParams();
  const { data } = useQuery(GET_BEST_ITEM, {
    variables: {
      selectBestItemId: Number(id),
    },
  });
  return (
    <Wrap>
      <ItemImgSlider {...settings}>
        {data?.selectBestItem.slideImg.map((item: string, index: number) => (
          <ItemSlideImg key={index} src={`/img/best/${item}`} />
        ))}
      </ItemImgSlider>
      <ItemImformationTop>
        <ItemName>{data?.selectBestItem.name}</ItemName>
        <ItemLike>{data?.selectBestItem.like}</ItemLike>
      </ItemImformationTop>
      <ItemImformationBottom>
        <ItemPrice>{data?.selectBestItem.price}원</ItemPrice>
        <ItemViews>{data?.selectBestItem.view}번 조회되었습니다.</ItemViews>
      </ItemImformationBottom>
    </Wrap>
  );
}

export default ProductItem;
