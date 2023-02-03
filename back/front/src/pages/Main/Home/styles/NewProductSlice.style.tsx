import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BannerContainer } from "./BannerSlide.style";

export const NewProductContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const NewProductBox = styled(BannerContainer)`
  width: 100%;
  margin: 4.5rem auto;
`;
export const NewItemInner = styled.div`
  width: 100%;
`;

export const NewProductImageBox = styled(Link)`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;
export const NewProductImage = styled.img`
  width: 270px;
  height: 270px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const NewProductImageSlider = styled(Slider)`
  width: 100%;
  height: auto;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    margin: 0 auto;
  }
  .slick-list {
    width: 100%;
    box-sizing: border-box;
    @media ${(props) => props.theme.tablet} {
      width: 100%;
    }
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      margin-right: 1rem;
    }
  }
  .slick-arrow {
    background-color: ${(props) => props.theme.borderColor};
    border-radius: 50%;
  }
`;
