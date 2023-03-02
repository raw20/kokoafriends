import styled from "styled-components";
import { Link } from "react-router-dom";
import { BannerContainer } from "./BannerSlide.style";

export const NewProductContainer = styled.div`
  width: 70%;
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
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;

  &:hover {
    opacity: 0.7;
  }
`;
export const NewProductImageBoxInner = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`;
export const NewProductImage = styled.img`
  width: 240px;
  height: 240px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const NewProductImageSlider = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    margin: 0 auto;
  }
`;
