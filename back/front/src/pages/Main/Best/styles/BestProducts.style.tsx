import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";

export const BestProductsContainer = styled.div`
  width: 100%;
`;

export const ProductsBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-rows: 450px 450px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 200px 200px;
    grid-template-rows: 250px 250px;
  }
`;
export const BestProductsTitleBox = styled.div`
  width: 80%;
  height: auto;
  margin: 1rem auto;
  text-align: center;
`;
export const ProductLink = styled(Link)`
  width: 80%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;
export const BestProductsImageBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const BestProductsContentsBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 1.2rem 0;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export const ProductImageSlider = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 1rem auto;
  }
  .slick-arrow {
    background-color: ${(props) => props.theme.borderColor};
    border-radius: 50%;
  }
`;
export const SliderImage = styled.img`
  width: 620px;
  height: 620px;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 70%;
    height: 70%;
  }
`;
export const TopMainInfoContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
`;
export const BottomMainInfoContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const SubInfoContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 3.5rem auto;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin: 1rem auto;
`;
export const ShowButtonArea = styled.div`
  width: 100%;
`;
export const BsCart = styled(BsCart4)`
  font-size: 2rem;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.4rem;
  }
`;
