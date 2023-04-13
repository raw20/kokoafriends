import Loading from "../../../components/Loading/Loading";
import {
  PrimaryComponentsInner,
  PrimaryImage,
  PrimaryRank,
  PrimaryTitle,
  SecondContent,
  SecondRank,
  SecondTitle,
} from "../../../styles/Common.style";
import {
  BestProductsContainer,
  BestProductsImageBox,
  ProductLink,
  ProductsBox,
  BestProductsTitleBox,
  BestProductsContentsBox,
} from "./styles/BestProducts.style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useCountView from "./hooks/mutations/useCountView";
import useGetProducts from "./hooks/queries/useGetProducts";
import { useNavigate } from "react-router-dom";

function BestProducts() {
  const { data, loading } = useGetProducts();
  const countViews = useCountView();
  const navigate = useNavigate();

  const bestProducts = data?.products
    .map((ele) => ele)
    .sort((a, b) => b.products_view - a.products_view);

  function replaceProductHandler(id: number) {
    navigate(`/Product/${id}`);
    countViews({
      variables: {
        countViewsId: id,
      },
    });
  }

  function addCartHandler(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    console.log("add");
  }

  if (loading) return <Loading />;
  return (
    <BestProductsContainer>
      <PrimaryComponentsInner>
        <BestProductsTitleBox>
          <PrimaryTitle>지금 인기있는😍</PrimaryTitle>
        </BestProductsTitleBox>

        <ProductsBox>
          {bestProducts?.map((product, index) => (
            <ProductLink
              onClick={() => {
                replaceProductHandler(product?.products_id);
              }}
              key={product?.products_id}
            >
              <BestProductsImageBox>
                <PrimaryImage src={product?.products_slideImg} />
                {index < 3 ? (
                  <SecondRank>{index + 1}</SecondRank>
                ) : (
                  <PrimaryRank>{index + 1}</PrimaryRank>
                )}
                <BestProductsContentsBox>
                  <SecondContent> {product?.products_name}</SecondContent>
                  <ShoppingCartOutlinedIcon
                    onClick={addCartHandler}
                    sx={{ cursor: "pointer" }}
                    style={{ color: "#616161" }}
                  />
                </BestProductsContentsBox>
                <SecondTitle>{product?.products_price}원</SecondTitle>
              </BestProductsImageBox>
            </ProductLink>
          ))}
        </ProductsBox>
      </PrimaryComponentsInner>
    </BestProductsContainer>
  );
}

export default BestProducts;
