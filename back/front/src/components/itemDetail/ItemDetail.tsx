import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Modal from "react-modal";
import BuyModal from "./BuyModal";
import { ItemDetailComponent } from "../../interface/IDBdataType";
import Reviews from "./Reviews";
import { BsCart4 } from "react-icons/bs";

const CustomModalStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const GET_ITEM = gql`
  query SelectItem($selectItemId: Int!) {
    selectItem(id: $selectItemId) {
      sId
      sName
      sTitle
      sContents
      sPrice
      sLike
      sView
      sHalf_title
      slideImg
      mainTopImg
      mainMidImg
      mainBottomImg
    }
    nowUser {
      user_code
    }
    cartList {
      sName
      sPrice
      slideImg
    }
  }
`;
const ADD_CART = gql`
  mutation AddCart(
    $cartId: Int!
    $sId: Int!
    $sName: String!
    $sPrice: Int!
    $bCount: Int!
    $slideImg: [String]!
    $check: Boolean!
  ) {
    addCart(
      cartId: $cartId
      sId: $sId
      sName: $sName
      sPrice: $sPrice
      bCount: $bCount
      slideImg: $slideImg
      check: $check
    ) {
      sId
      sName
      sPrice
      bCount
      slideImg
      check
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
export const Itemtitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;
`;
const ItemName = styled(Itemtitle)`
  font-size: 2.1rem;
`;
export const Itemtext = styled.p`
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
const BuyButtonArea = styled.div`
  width: 100%;
`;
const BsCart = styled(BsCart4)`
  font-size: 2rem;
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

function ItemDetail() {
  const { id } = useParams();
  const { data } = useQuery<ItemDetailComponent>(GET_ITEM, {
    variables: {
      selectItemId: Number(id),
    },
  });
  const [addCart] = useMutation(ADD_CART, {
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  const userCode = Number(data?.nowUser.map((user: any) => user.user_code));
  const getIndex = String(new Date().getTime());
  const cartIndex = Number(
    `${id}${userCode}${getIndex.substring(getIndex.length - 3)}`
  );
  function addCartHandler(name: string, price: number, slideImg: string) {
    addCart({
      variables: {
        cartId: Number(cartIndex),
        sId: Number(id),
        sName: name,
        sPrice: price,
        bCount: 1,
        slideImg: slideImg,
        check: true,
      },
    });
    alert(`${name}이(가) 장바구니에 담겼습니다.`);
  }
  return (
    <Wrap>
      <Inner>
        <ItemImgSlider {...settings}>
          {data?.selectItem[0].slideImg.map((item: string, index: number) => (
            <ItemSlideImg key={index} src={`/img/product/${item}`} />
          ))}
        </ItemImgSlider>
        <ItemImformationTop>
          <ItemName>{data?.selectItem[0].sName}</ItemName>
          <BsCart
            onClick={() =>
              addCartHandler(
                String(data?.selectItem[0].sName),
                Number(data?.selectItem[0].sPrice),
                String(data?.selectItem[0].slideImg[0])
              )
            }
          />
        </ItemImformationTop>
        <ItemImformationBottom>
          <Itemtext>{data?.selectItem[0].sPrice}원</Itemtext>
          <ItemViews>{data?.selectItem[0].sView}번 조회되었습니다.</ItemViews>
        </ItemImformationBottom>
        <BuyButtonArea>
          <ItemContents>
            {data?.selectItem[0].sHalf_title
              .split("\n")
              .map((line: string, index: number) => (
                <Itemtitle key={index}>
                  {line}
                  <br />
                </Itemtitle>
              ))}
            {data?.selectItem[0].sContents
              .split("\n")
              .map((line: string, index: number) => (
                <Itemtext key={index}>
                  {line}
                  <br />
                </Itemtext>
              ))}
            {data?.selectItem[0].mainTopImg.map(
              (img: string, index: number) => (
                <ItemImg key={index} src={`/img/product/${img}`} />
              )
            )}
            <Itemtext>이렇게 귀여운 카카오프렌즈샵 제품입니다.</Itemtext>
            {data?.selectItem[0].mainMidImg.map(
              (img: string, index: number) => (
                <ItemImg key={index} src={`/img/product/${img}`} />
              )
            )}
            <Itemtext>지금 당장 카카오프렌즈를 만나보세요.</Itemtext>
            {data?.selectItem[0].mainBottomImg.map(
              (img: string, index: number) => (
                <ItemImg key={index} src={`/img/product/${img}`} />
              )
            )}
            <Itemtitle>구성품</Itemtitle>
            <Itemtext>건진지 외 필요한거 여러개</Itemtext>
          </ItemContents>
          <Reviews userCode={userCode} />
          <BuyButton onClick={() => openModal()}>구매하기</BuyButton>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => closeModal()}
            style={CustomModalStyles}
          >
            <BuyModal userCode={userCode} />
          </Modal>
        </BuyButtonArea>
      </Inner>
    </Wrap>
  );
}

export default ItemDetail;
