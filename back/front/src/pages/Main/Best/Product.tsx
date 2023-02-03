import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import BuyModal from "../../../components/Modal/BuyModal";
import Reviews from "./Reviews";
import Loading from "../../../components/Loading/Loading";
import useGetProductById from "./hooks/queries/useGetProductById";
import useAddCart from "./hooks/mutations/useAddCart";
import {
  BottomMainInfoContainer,
  BsCart,
  ProductContainer,
  ProductImage,
  ProductImageSlider,
  ShowButtonArea,
  SliderImage,
  SubInfoContainer,
  TopMainInfoContainer,
} from "./styles/Best.style";
import {
  BuyButton,
  PrimaryContent,
  PrimaryTitle,
  SecondComponentsInner,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";

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

function Product() {
  const { id } = useParams();
  const { data, loading } = useGetProductById(id);
  const addCart = useAddCart();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }
  let index = 0;
  /* const userCode = Number(data?.nowUser.map((user: any) => user.user_code));
  const getIndex = String(new Date().getTime());
  const cartIndex = Number(
    `${id}${userCode}${getIndex.substring(getIndex.length - 3)}`
  ); */
  function addCartHandler(name: string, price: number, slideImg: string) {
    addCart({
      variables: {
        cartId: index++,
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
  if (loading) return <Loading />;

  return (
    <ProductContainer>
      <SecondComponentsInner>
        {/*  <ProductImageSlider {...settings}>
          {data?.Product.slideImg.map((item: string, index: number) => (
            <SliderImage key={index} src={`/img/product/${item}`} />
          ))}
        </ProductImageSlider> */}
        <TopMainInfoContainer>
          <SecondTitle>{data?.Product.sName}</SecondTitle>
          <BsCart
            onClick={() =>
              addCartHandler(
                String(data?.Product.sName),
                Number(data?.Product.sPrice),
                String(data?.Product.slideImg[0])
              )
            }
          />
        </TopMainInfoContainer>
        <BottomMainInfoContainer>
          <SecondTitle>{data?.Product.sPrice}원</SecondTitle>
          <SecondContent>{data?.Product.sView}번 조회되었습니다.</SecondContent>
        </BottomMainInfoContainer>
        <ShowButtonArea>
          <SubInfoContainer>
            {data?.Product.sHalf_title
              .split("\n")
              .map((line: string, index: number) => (
                <PrimaryTitle key={index}>
                  {line}
                  <br />
                </PrimaryTitle>
              ))}
            {data?.Product.sContents
              .split("\n")
              .map((line: string, index: number) => (
                <PrimaryContent key={index}>
                  {line}
                  <br />
                </PrimaryContent>
              ))}
            {data?.Product.mainTopImg.map((img: string, index: number) => (
              <ProductImage key={index} src={`/img/product/${img}`} />
            ))}
            <PrimaryContent>
              이렇게 귀여운 카카오프렌즈샵 제품입니다.
            </PrimaryContent>
            {data?.Product.mainMidImg.map((img: string, index: number) => (
              <ProductImage key={index} src={`/img/product/${img}`} />
            ))}
            <PrimaryContent>
              지금 당장 카카오프렌즈를 만나보세요.
            </PrimaryContent>
            {data?.Product.mainBottomImg.map((img: string, index: number) => (
              <ProductImage key={index} src={`/img/product/${img}`} />
            ))}
            <PrimaryTitle>구성품</PrimaryTitle>
            <PrimaryContent>건진지 외 필요한거 여러개</PrimaryContent>
          </SubInfoContainer>
          <Reviews userCode={11} />
          <BuyButton onClick={() => openModal()}>구매하기</BuyButton>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => closeModal()}
            style={CustomModalStyles}
          >
            <BuyModal userCode={11} />
          </Modal>
        </ShowButtonArea>
      </SecondComponentsInner>
    </ProductContainer>
  );
}

export default Product;
