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
    (product) => product.sId > data?.products.length - 4
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
              to={`/bestProduct/${product?.sId}`}
              key={index}
              onClick={() => {
                countViewHandler(product?.sId);
              }}
            >
              <NewProductImageBoxInner>
                <NewProductImage
                  src={require(`../../../asset/image/product/${product?.slideImg[0]}`)}
                />
                <SecondContent> {product?.sName}</SecondContent>
                <SecondTitle>{product?.sPrice}원</SecondTitle>
              </NewProductImageBoxInner>
            </NewProductImageBox>
          ))}
        </NewProductImageSlider>
      </NewProductBox>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
