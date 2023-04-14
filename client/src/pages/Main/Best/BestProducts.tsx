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
import useGetBestProducts from "../../../services/products/hooks/queries/useGetBestProducts";
import { useNavigate } from "react-router-dom";
import useCountView from "../../../services/products/hooks/mutations/useCountView";
import { addCart } from "../../../store/cart";

function BestProducts() {
  const { data, loading } = useGetBestProducts();
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

  function addCartHandler(
    e: { stopPropagation: () => void },
    id: number,
    name: string,
    price: string,
    img: string
  ) {
    e.stopPropagation();
    addCart(id, name, 1, price, img);
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
                    onClick={(e) =>
                      addCartHandler(
                        e,
                        product.products_id,
                        product.products_name,
                        product.products_price,
                        product.products_slideImg
                      )
                    }
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
