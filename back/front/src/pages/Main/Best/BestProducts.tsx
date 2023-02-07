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

function BestProducts() {
  const { products, loading } = useGetProducts();
  const countView = useCountView();

  const bestProducts = products?.products
    .map((ele) => ele)
    .sort((a, b) => b.sView - a.sView);

  function viewCountHandler(id: number) {
    countView({
      variables: {
        countViewId: Number(id),
      },
    });
  }
  if (loading) return <Loading />;
  return (
    <BestProductsContainer>
      <PrimaryComponentsInner>
        <BestProductsTitleBox>
          <PrimaryTitle>지금 인기있는😍</PrimaryTitle>
        </BestProductsTitleBox>

        <ProductsBox>
          {bestProducts?.map((product, index) =>
            index < 6 ? (
              <ProductLink
                onClick={() => {
                  viewCountHandler(product?.sId);
                }}
                to={`/Product/${product?.sId}`}
                key={product?.sId}
              >
                <BestProductsImageBox>
                  <PrimaryImage
                    src={require(`../../../asset/image/product/${product?.slideImg[0]}`)}
                  />
                  {index < 3 ? (
                    <SecondRank>{index + 1}</SecondRank>
                  ) : (
                    <PrimaryRank>{index + 1}</PrimaryRank>
                  )}
                  <BestProductsContentsBox>
                    <SecondContent> {product?.sName}</SecondContent>
                    <ShoppingCartOutlinedIcon style={{ color: "#616161" }} />
                  </BestProductsContentsBox>
                  <SecondTitle>{product?.sPrice}원</SecondTitle>
                </BestProductsImageBox>
              </ProductLink>
            ) : null
          )}
        </ProductsBox>
      </PrimaryComponentsInner>
    </BestProductsContainer>
  );
}

export default BestProducts;
