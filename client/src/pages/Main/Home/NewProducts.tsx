import {
  NewProductInner,
  NewProductContainer,
  NewProductImage,
  NewProductImageBox,
  NewProductImageBoxInner,
  NewProductBox,
} from "./styles/NewProducts.style";
import {
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { IHomeChildComponentProps } from "../../../types/IProps.interface";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addCart, deleteCart } from "../../../store/cart";
import useGetCartData from "../../../services/products/hooks/custom/useGetCartData";

function NewProjuctsSlide({ data, countViews }: IHomeChildComponentProps) {
  const navigate = useNavigate();
  const { findProductId } = useGetCartData();
  const newProducts = data?.products.filter(
    (product) => product.products_new_status
  );

  function replaceProductHandler(id: number) {
    navigate(`/Product/${id}`);
    countViews({
      variables: {
        countViewsId: Number(id),
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

  function deleteCartHandler(e: { stopPropagation: () => void }, id: number) {
    e.stopPropagation();
    deleteCart(id);
  }

  return (
    <NewProductContainer>
      <NewProductInner>
        <PrimaryTitle>새로나온 친구들</PrimaryTitle>
        <NewProductBox>
          {newProducts?.map((product) => (
            <NewProductImageBox
              key={product?.products_id}
              onClick={() => {
                replaceProductHandler(product?.products_id);
              }}
            >
              <NewProductImageBoxInner>
                <NewProductImage src={product?.products_slideImg} />
                <Box sx={{ display: "flex" }}>
                  <SecondContent> {product?.products_name}</SecondContent>
                  {!findProductId.includes(product.products_id) ? (
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
                  ) : (
                    <RemoveShoppingCartIcon
                      onClick={(e) => deleteCartHandler(e, product.products_id)}
                      sx={{ cursor: "pointer" }}
                      style={{ color: "#616161" }}
                    />
                  )}
                </Box>
                <SecondTitle>{product?.products_price}원</SecondTitle>
              </NewProductImageBoxInner>
            </NewProductImageBox>
          ))}
        </NewProductBox>
      </NewProductInner>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
