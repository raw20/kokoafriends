import styled from "styled-components";
import { BannerContainer } from "./BannerSlide.style";

export const NewProductContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 0 auto;
  }
`;

export const NewProductInner = styled(BannerContainer)`
  width: 100%;
  margin: 4.5rem auto;

  @media ${(props) => props.theme.mobile} {
    width: 95%;
    margin: 0 auto;
  }
`;

export const NewProductImageBox = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto;

  &:hover {
    opacity: 0.7;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const NewProductImageBoxInner = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem auto;

  @media ${(props) => props.theme.tablet} {
    width: 80%;
    margin: 3rem auto;
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 3rem auto;
  }
`;
export const NewProductImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
  }
`;
export const NewProductTitleBox = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
    margin: 3rem auto;
  }
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    margin: 1rem auto;
  }
`;

export const NewProductBox = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 265px 265px 265px 265px;
  grid-template-rows: 300px 300px 300px 300px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 270px 270px 270px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    grid-template-columns: 190px 190px;
    grid-template-rows: 215px 215px;
    margin: 0 auto;
  }
`;
