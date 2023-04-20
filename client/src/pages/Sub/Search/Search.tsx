import { useNavigate, useOutletContext } from "react-router-dom";
import { ISearchContextProps } from "../../../types/IProps.interface";
import useFilterParams from "../../../services/products/hooks/custom/useFilterParams";
import { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { searchValueVar } from "../../../store/search";
import {
  SearchBox,
  SearchContainer,
  SearchContentsBox,
  SearchImageBox,
  SearchTitleBox,
} from "./styles/Search.style";
import {
  PrimaryComponentsInner,
  PrimaryImage,
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { ProductLink } from "../../Main/Best/styles/BestProducts.style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import useGetCartData from "../../../services/products/hooks/custom/useGetCartData";
import { addCart, deleteCart } from "../../../store/cart";
import {
  feedbackMessageVar,
  isFetchCompletedVar,
  isOpenSnackBarVar,
} from "../../../store/snackbar";
import useCountView from "../../../services/products/hooks/mutations/useCountView";
import SearchFilterButton from "./SearchFilterButton";
import { Box } from "@mui/material";

function Search() {
  const { data } = useOutletContext<ISearchContextProps>();
  const { filterData, filterValue, setSearchParams } = useFilterParams(
    "search",
    "filter",
    data
  );
  const { findProductId } = useGetCartData();
  const searchValue = useReactiveVar(searchValueVar);
  const navigator = useNavigate();
  const countViews = useCountView();

  function replaceProductHandler(id: number) {
    navigator(`/Product/${id}`);
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

  useEffect(() => {
    setSearchParams({ search: searchValue, filter: "null" });
  }, [searchValue, setSearchParams]);

  return (
    <SearchContainer>
      <PrimaryComponentsInner>
        <SearchTitleBox>
          <Box sx={{ mb: 5 }}>
            <PrimaryTitle>🔍 {searchValue} 검색결과</PrimaryTitle>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <SecondContent>총 {filterData?.length}건</SecondContent>
            <SearchFilterButton
              filterValue={filterValue!}
              setSearchParams={setSearchParams}
            />
          </Box>
        </SearchTitleBox>

        <SearchBox>
          {filterData?.map((product) => (
            <ProductLink
              onClick={() => {
                replaceProductHandler(product?.products_id);
              }}
              key={product.products_id}
            >
              <SearchImageBox>
                <PrimaryImage src={product?.products_slideImg} />

                <SearchContentsBox>
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
                      sx={{ color: "#616161", cursor: "pointer" }}
                    />
                  ) : (
                    <RemoveShoppingCartIcon
                      onClick={(e) => deleteCartHandler(e, product.products_id)}
                      sx={{ color: "#616161", cursor: "pointer" }}
                    />
                  )}
                </SearchContentsBox>
                <SecondTitle>{product?.products_price}원</SecondTitle>
              </SearchImageBox>
            </ProductLink>
          ))}
        </SearchBox>
      </PrimaryComponentsInner>
    </SearchContainer>
  );
}

export default Search;
