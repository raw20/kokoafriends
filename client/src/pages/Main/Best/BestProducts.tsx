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
    .sort((a, b) => b.products_view - a.products_view);

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
                  viewCountHandler(product?.products_id);
                }}
                to={`/Product/${product?.products_id}`}
                key={product?.products_id}
              >
                <BestProductsImageBox>
                  <PrimaryImage
                    src={require(`../../../asset/image/product/${product?.products_slideImg[0]}`)}
                  />
                  {index < 3 ? (
                    <SecondRank>{index + 1}</SecondRank>
                  ) : (
                    <PrimaryRank>{index + 1}</PrimaryRank>
                  )}
                  <BestProductsContentsBox>
                    <SecondContent> {product?.products_name}</SecondContent>
                    <ShoppingCartOutlinedIcon style={{ color: "#616161" }} />
                  </BestProductsContentsBox>
                  <SecondTitle>{product?.products_name}원</SecondTitle>
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
