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
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewProjuctsSlide({ data, countViews }: IHomeChildComponentProps) {
  const navigate = useNavigate();
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

  function addCartHandler(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    console.log("add");
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
                  <ShoppingCartOutlinedIcon
                    onClick={addCartHandler}
                    sx={{ cursor: "pointer" }}
                    style={{ color: "#616161" }}
                  />
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
