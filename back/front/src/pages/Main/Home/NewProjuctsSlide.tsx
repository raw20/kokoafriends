import React from "react";
import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import {
  NewProductBox,
  NewProductContainer,
  NewProductImage,
  NewProductImageBox,
  NewProductImageSlider,
} from "./styles/NewProductSlice.style";
import { Products } from "../../../types/Products.interface";
import {
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";

const settings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "3rem",
  slidesToShow: 3,
  speed: 500,
};

interface IHomeChildComponentProps {
  data: Products | undefined;
  countView: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

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
        <NewProductImageSlider {...settings}>
          {newProducts?.map((product, index) => (
            <NewProductImageBox
              to={`/bestProduct/${product?.sId}`}
              key={index}
              onClick={() => {
                countViewHandler(product?.sId);
              }}
            >
              <NewProductImage src={`/img/product/${product?.slideImg[0]}`} />
              <SecondContent> {product?.sName}</SecondContent>
              <SecondTitle>{product?.sPrice}원</SecondTitle>
            </NewProductImageBox>
          ))}
        </NewProductImageSlider>
      </NewProductBox>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
