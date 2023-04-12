import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import BuyModal from "../../../components/Modal/BuyModal";
import ProductReviews from "./ProductReviews";
import Loading from "../../../components/Loading/Loading";
import useGetProductById from "./hooks/queries/useGetProductById";
import useAddCart from "./hooks/mutations/useAddCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  BottomMainInfoContainer,
  ProductContainer,
  ProductImage,
  ProductImageSlider,
  ShowButtonArea,
  SliderImage,
  SubInfoContainer,
  TopMainInfoContainer,
} from "./styles/BestProducts.style";
import {
  ProductBuyButton,
  PrimaryContent,
  PrimaryTitle,
  SecondComponentsInner,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { Box, Rating } from "@mui/material";

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
  const productRating =
    data?.review !== undefined
      ? data?.review
          .map((element) => element.review_rating)
          .reduce(function add(sum, curr) {
            return sum + curr;
          }, 0) / data?.review.length
      : 0;

  const addCart = useAddCart();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  let index = 0;

  function addCartHandler(
    name: string,
    price: number,
    products_slideImg: string
  ) {
    /*  addCart({
      variables: {
        cartId: index++,
        sId: Number(id),
        products_name: name,
        products_price: price,
        bCount: 1,
        products_slideImg: products_slideImg,
        check: true,
      },
    }); */
    alert(`${name}이(가) 장바구니에 담겼습니다.`);
  }

  if (loading) return <Loading />;

  return (
    <ProductContainer>
      <SecondComponentsInner>
        <ProductImageSlider>
          <SliderImage
            alt={data?.product[0].products_name}
            src={data?.product[0].products_slideImg}
          />
        </ProductImageSlider>

        <TopMainInfoContainer>
          <Box>
            <SecondTitle>{data?.product[0].products_name}</SecondTitle>
            <Rating
              name="half-rating-read"
              defaultValue={productRating || 0}
              precision={0.5}
              readOnly
            />
          </Box>

          <ShoppingCartOutlinedIcon
            style={{ color: "#616161", cursor: "pointer", fontSize: "2rem" }}
            onClick={() =>
              addCartHandler(
                String(data?.product[0].products_name),
                Number(data?.product[0].products_price),
                String(data?.product[0].products_slideImg)
              )
            }
          />
        </TopMainInfoContainer>
        <BottomMainInfoContainer>
          <SecondTitle>{data?.product[0].products_price}원</SecondTitle>
          <SecondContent>
            {data?.product[0].products_view}번 조회되었습니다.
          </SecondContent>
        </BottomMainInfoContainer>
        <ShowButtonArea>
          <SubInfoContainer>
            {data?.product[0].products_half_title
              .split("\n")
              .map((line: string, index: number) => (
                <PrimaryTitle key={index}>
                  {line}
                  <br />
                </PrimaryTitle>
              ))}
            {data?.product[0].products_contents
              .split("\n")
              .map((line: string, index: number) => (
                <PrimaryContent key={index}>
                  {line}
                  <br />
                </PrimaryContent>
              ))}

            <ProductImage
              alt={data?.product[0].products_name}
              src={data?.product[0].products_mainTopImg}
            />
            <PrimaryContent>
              이렇게 귀여운 카카오프렌즈샵 제품입니다.
            </PrimaryContent>

            <ProductImage
              alt={data?.product[0].products_name}
              src={data?.product[0].products_mainMidImg}
            />
            <PrimaryContent>
              지금 당장 카카오프렌즈를 만나보세요.
            </PrimaryContent>

            <ProductImage
              alt={data?.product[0].products_name}
              src={data?.product[0].products_mainBottomImg}
            />

            <PrimaryTitle>구성품</PrimaryTitle>
            <PrimaryContent>상품 및 설명서</PrimaryContent>
          </SubInfoContainer>
          <ProductReviews data={data} />
          <ProductBuyButton onClick={() => openModal()}>
            구매하기
          </ProductBuyButton>
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
