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
  const bannerProducts = data?.products.filter(
    (product) => Number(product.products_price) > 40000
  );

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
          {data?.products?.map((product) => (
            <Carousel.Item key={product?.products_id}>
              <BannerImageBox
                to={`/product/${product?.products_id}`}
                onClick={() => {
                  countViewHandler(product?.products_id);
                }}
              >
                <BannerImage
                  src={product?.products_mainBottomImg}
                  alt={product?.products_title}
                />
                <Carousel.Caption>
                  <BannerTextBox>
                    <BannerTitle>{product.products_title}</BannerTitle>
                    <BannerContents>{product.products_contents}</BannerContents>
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
