import React from "react";
import {
  NewProductBox,
  NewProductContainer,
  NewProductImage,
  NewProductImageBox,
  NewProductImageBoxInner,
  NewProductImageSlider,
} from "./styles/NewProductSlice.style";
import {
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { IHomeChildComponentProps } from "../../../types/IProps.interface";

function NewProjuctsSlide({ data, countView }: IHomeChildComponentProps) {
  const newProducts = data?.products.filter(
    (product) => product.products_id > data?.products.length - 4
  );
  function countViewHandler(id: number) {
    countView({
      variables: {
        countViewId: Number(id),
      },
    });
  }
  return (
    <NewProductContainer>
      <NewProductBox>
        <PrimaryTitle>새로나온 친구들</PrimaryTitle>
        <NewProductImageSlider>
          {newProducts?.map((product, index) => (
            <NewProductImageBox
              to={`/bestProduct/${product?.products_id}`}
              key={index}
              onClick={() => {
                countViewHandler(product?.products_id);
              }}
            >
              <NewProductImageBoxInner>
                <NewProductImage
                  src={require(`../../../asset/image/product/${product?.products_slideImg[0]}`)}
                />
                <SecondContent> {product?.products_name}</SecondContent>
                <SecondTitle>{product?.products_price}원</SecondTitle>
              </NewProductImageBoxInner>
            </NewProductImageBox>
          ))}
        </NewProductImageSlider>
      </NewProductBox>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
