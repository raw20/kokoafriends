import { useParams } from "react-router-dom";
import ProductReviews from "./ProductReviews";
import useGetProductById from "../../../services/products/hooks/queries/useGetProductById";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
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
  PrimaryContent,
  PrimaryTitle,
  ProductPrimaryBuyButton,
  SecondComponentsInner,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { Box, Rating } from "@mui/material";
import { addCart, deleteCart } from "../../../store/cart";
import useGetCartData from "../../../services/products/hooks/custom/useGetCartData";
import {
  feedbackMessageVar,
  isFetchCompletedVar,
  isOpenSnackBarVar,
} from "../../../store/snackbar";

function Product() {
  const { id } = useParams();
  const { data, productRating } = useGetProductById(id);
  const { findProductId } = useGetCartData();

  function addCartHandler(
    id: number,
    name: string,
    price: string,
    img: string
  ) {
    addCart(id, name, 1, price, img);
    isFetchCompletedVar(true);
    feedbackMessageVar(`장바구니에 ${name}가 담겼습니다.`);
    isOpenSnackBarVar(true);
  }
  function deleteCartHandler(e: { stopPropagation: () => void }, id: number) {
    e.stopPropagation();
    deleteCart(id);
    feedbackMessageVar("장바구니 담기를 취소하였습니다.");
    isOpenSnackBarVar(true);
  }

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
          {!findProductId.includes(Number(data?.product[0].products_id)) ? (
            <ShoppingCartOutlinedIcon
              style={{ color: "#616161", cursor: "pointer", fontSize: "2rem" }}
              onClick={() =>
                addCartHandler(
                  Number(data?.product[0].products_id),
                  String(data?.product[0].products_name),
                  String(data?.product[0].products_price),
                  String(data?.product[0].products_slideImg)
                )
              }
            />
          ) : (
            <RemoveShoppingCartIcon
              onClick={(e) =>
                deleteCartHandler(e, Number(data?.product[0].products_id))
              }
              sx={{ color: "#616161", cursor: "pointer", fontSize: "2rem" }}
            />
          )}
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
          <ProductPrimaryBuyButton>구매하기</ProductPrimaryBuyButton>
        </ShowButtonArea>
      </SecondComponentsInner>
    </ProductContainer>
  );
}

export default Product;
