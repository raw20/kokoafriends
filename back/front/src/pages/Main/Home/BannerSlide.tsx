import React from "react";
import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import { Products } from "../../../types/Products.interface";
import {
  BannerContainer,
  BannerContents,
  BannerImage,
  BannerImageBox,
  BannerTextBox,
  BannerTitle,
} from "./Home.style";

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

function BannerSlide({ data, countView }: IHomeChildComponentProps) {
  const bannerProducts = data?.products.filter((product) => product.sId < 6);
  function countViewHandler(id: number) {
    countView({
      variables: {
        countViewId: Number(id),
      },
    });
  }
  return (
    <>
      <BannerContainer>
        {bannerProducts?.map((product) => (
          <BannerImageBox
            to={`/product/${product?.sId}`}
            key={product?.sId}
            onClick={() => {
              countViewHandler(product?.sId);
            }}
          >
            <BannerImage
              src={`/img/product/${product?.mainBottomImg[0]}`}
              alt={product?.sTitle}
            />
            <BannerTextBox>
              {product?.sTitle.split("\n").map((line, index: any) => (
                <BannerTitle key={index}>
                  {line}
                  <br />
                </BannerTitle>
              ))}
              {product?.sContents.split("\n").map((line, index: any) => (
                <BannerContents key={index}>
                  {line}
                  <br />
                </BannerContents>
              ))}
            </BannerTextBox>
          </BannerImageBox>
        ))}
      </BannerContainer>
    </>
  );
}

export default BannerSlide;
