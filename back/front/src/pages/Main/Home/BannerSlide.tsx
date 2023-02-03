import React from "react";
import {
  BannerContainer,
  BannerContents,
  BannerImage,
  BannerImageBox,
  BannerTextBox,
  BannerTitle,
} from "./styles/BannerSlide.style";
import { IHomeChildComponentProps } from "../../../types/IProps.interface";
import Carousel from "react-bootstrap/Carousel";

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
        <Carousel>
          {bannerProducts?.map((product) => (
            <Carousel.Item key={product?.sId}>
              <BannerImageBox
                to={`/product/${product?.sId}`}
                onClick={() => {
                  countViewHandler(product?.sId);
                }}
              >
                <BannerImage
                  src={`/img/product/${product?.mainBottomImg[0]}`}
                  alt={product?.sTitle}
                />
                <Carousel.Caption>
                  <BannerTextBox>
                    <BannerTitle>{product.sTitle}</BannerTitle>
                    <BannerContents>{product.sContents}</BannerContents>
                  </BannerTextBox>
                </Carousel.Caption>
              </BannerImageBox>
            </Carousel.Item>
          ))}
        </Carousel>
      </BannerContainer>
    </>
  );
}

export default BannerSlide;
