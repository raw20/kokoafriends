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
  ProductImageBox,
  ProductLink,
  ProductsBox,
} from "./Best.style";
import useCountView from "./hooks/mutations/useCountView";
import useGetProducts from "./hooks/queries/useGetProducts";

function BestProducts() {
  const { data, loading } = useGetProducts();
  const countView = useCountView();

  const bestProducts = data?.products
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
      <PrimaryTitle>지금 인기있는😍</PrimaryTitle>
      <PrimaryComponentsInner>
        <ProductsBox>
          {bestProducts?.map((product, index) =>
            index < 6 ? (
              <ProductLink
                onClick={() => {
                  viewCountHandler(product?.sId);
                }}
                to={`/bestProduct/${product?.sId}`}
                key={product?.sId}
              >
                <ProductImageBox>
                  <PrimaryImage src={`/img/product/${product?.slideImg[0]}`} />
                  {index < 3 ? (
                    <SecondRank>{index + 1}</SecondRank>
                  ) : (
                    <PrimaryRank>{index + 1}</PrimaryRank>
                  )}
                  <SecondContent> {product?.sName}</SecondContent>
                  <SecondTitle>{product?.sPrice}원</SecondTitle>
                </ProductImageBox>
              </ProductLink>
            ) : null
          )}
        </ProductsBox>
      </PrimaryComponentsInner>
    </BestProductsContainer>
  );
}

export default BestProducts;
