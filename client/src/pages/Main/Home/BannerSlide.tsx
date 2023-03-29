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
    (product) => product.products_id < 6
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
          {bannerProducts?.map((product) => (
            <Carousel.Item key={product?.products_id}>
              <BannerImageBox
                to={`/product/${product?.products_id}`}
                onClick={() => {
                  countViewHandler(product?.products_id);
                }}
              >
                <BannerImage
                  src={require(`../../../asset/image/product/${product?.products_mainBottomImg[0]}`)}
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
