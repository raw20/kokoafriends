import styled from "styled-components";
import {
  PrimaryContainer,
  ProductPrimaryBuyButton,
} from "../../../../styles/Common.style";

export const CartContainer = styled(PrimaryContainer)``;

export const Title = styled.h1`
  margin: 1.5rem 0;
  font-size: 2rem;
  text-align: center;
  font-weight: bolder;
`;

export const CheckTable = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`;
export const CheckLeft = styled.div`
  width: 50%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
export const CheckRight = styled.div`
  width: 50%;
`;
export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.muziColor};
  border-radius: 50%;
  margin-right: 1rem;
  cursor: pointer;
`;
export const CartListTable = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.muziColor};
  border-top: 5px solid ${(props) => props.theme.muziColor};
  border-bottom: 1px solid ${(props) => props.theme.muziColor};
`;

export const LargeText = styled.p`
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: noCartContainer;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;
export const MediumText = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
`;
export const SecondMediumText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const SmallText = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: right;
  color: ${(props) => props.theme.secondColor};
  cursor: pointer;
`;

export const BuyTable = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0;
`;

export const DefaultBuyButton = styled(ProductPrimaryBuyButton)`
  background-color: ${(props) => props.theme.borderColor};
`;
