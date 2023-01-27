import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const BannerContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 1.5rem auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 95%;
    margin: 0 auto;
  }
`;
export const BannerImageBox = styled(Link)`
  width: 100%;
  height: 20%;
  position: relative;
`;
export const BannerImage = styled.img`
  width: 100%;
  height: 30%;
  margin-bottom: 1rem;
  border-radius: 20px;
  position: relative;
`;
export const BannerTextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 5.1rem 1.3rem;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    margin: 0 0 5rem 0;
  }
`;
export const BannerTitle = styled.h1`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;
export const BannerContents = styled.p`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 1.3rem;
  color: ${(props) => props.theme.bgColor};
  font-weight: 600;
  margin-top: 15px;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
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
