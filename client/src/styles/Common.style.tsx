import styled from "styled-components";
import { Button } from "@mui/material";
export const PrimaryTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;
  margin-top: 1rem;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.1rem;
  }
`;

export const PrimaryContent = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.1rem;
  }
`;
export const SecondTitle = styled.h1`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  color: ${(props) => props.theme.textColor};
  margin: 1rem 0;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
    margin: 0;
  }
`;

export const SecondContent = styled.p`
  width: 80%;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.secondTextColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;
export const SecondRank = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.jaygColor};
  color: ${(props) => props.theme.bgColor};
  position: absolute;
  border-radius: 5px;
  top: 3%;
  left: 3%;
  @media ${(props) => props.theme.mobile} {
    width: 20px;
    height: 20px;
    top: 5%;
    left: 5%;
  }
`;
export const PrimaryRank = styled(SecondRank)`
  background-color: ${(props) => props.theme.secondColor};
`;

export const PrimaryImage = styled.img`
  width: 280px;
  height: 280px;
  border: 2px solid ${(props) => props.theme.borderColor};
  margin-bottom: 1rem;
  border-radius: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 150px;
    height: 150px;
  }
`;

export const PrimaryContainer = styled.div`
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

export const PrimaryComponentsInner = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  margin: 1.5rem auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const SecondComponentsInner = styled.div`
  width: 50%;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 95%;
  }
`;

export const ProductPrimaryBuyButton = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.secondColor};
  color: ${(props) => props.theme.bgColor};
  position: sticky;
  bottom: 0px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProductSecondBuyButton = styled(ProductPrimaryBuyButton)`
  background-color: ${(props) => props.theme.jaygColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 1.4rem;
`;

export const DialogButton = styled(Button)`
  color: ${(props) => props.theme.secondColor};
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 3rem 1rem 0;
  border: 1px solid ${(props) => props.theme.borderColor};
  @media ${(props) => props.theme.mobile} {
    width: 100px;
    height: 100px;
    margin: 0.5rem 1.5rem 0.5rem 0;
  }
`;
