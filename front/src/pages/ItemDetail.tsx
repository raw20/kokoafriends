import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_ITEM = gql`
  query ($selectItemId: Int!) {
    selectItem(id: $selectItemId) {
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
const Itemtitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.3rem;
`;
const ItemLike = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;
const Itemtext = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;
const ItemViews = styled(Itemtext)`
  font-size: 0.9rem;
`;
const ItemContents = styled.div`
  width: 30%;
  height: auto;
  margin: 3.5rem auto;
  padding: 1.2rem 1rem;
`;
const ItemImg = styled.img`
  width: 100%;
  height: auto;
  margin: 1rem auto;
`;
function ItemDetail() {
  const { id } = useParams();
  const { data } = useQuery(GET_ITEM, {
    variables: {
      selectItemId: Number(id),
    },
  });
  return (
    <Wrap>
      <ItemImgSlider {...settings}>
        {data?.selectItem.slideImg.map((item: string, index: number) => (
          <ItemSlideImg key={index} src={`/img/${item}`} />
        ))}
      </ItemImgSlider>
      <ItemImformationTop>
        <Itemtitle>{data?.selectItem.name}</Itemtitle>
        <ItemLike>{data?.selectItem.like}</ItemLike>
      </ItemImformationTop>
      <ItemImformationBottom>
        <Itemtext>{data?.selectItem.price}원</Itemtext>
        <ItemViews>{data?.selectItem.view}번 조회되었습니다.</ItemViews>
      </ItemImformationBottom>
      <ItemContents>
        {data?.selectItem.comment
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
          <ItemImg key={index} src={`/img/${img}`} />
        ))}
        <Itemtext>이렇게 귀여운 카카오프렌즈샵 제품입니다.</Itemtext>
        {data?.selectItem.mainMidImg.map((img: string, index: number) => (
          <ItemImg key={index} src={`/img/${img}`} />
        ))}
        <Itemtext>지금 당장 카카오프렌즈를 만나보세요.</Itemtext>
        {data?.selectItem.mainBottomImg.map((img: string, index: number) => (
          <ItemImg key={index} src={`/img/${img}`} />
        ))}
        <Itemtitle>구성품</Itemtitle>
        <Itemtext>건진지 외 필요한거 여러개</Itemtext>
      </ItemContents>
    </Wrap>
  );
}

export default ItemDetail;
