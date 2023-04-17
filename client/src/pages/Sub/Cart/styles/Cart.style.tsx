import styled from "styled-components";
import { ProductPrimaryBuyButton } from "../../../../styles/Common.style";

export const CartContainer = styled.div`
  width: 100%;
  height: auto;
  font-family: "Noto Sans KR", sans-serif;
`;
export const CartInner = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    width: 350px;
    margin: 0 auto;
  }
`;
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
  width: 100%;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: noCartContainer;
  margin-bottom: 1rem;
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
export const NumControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Control = styled.span`
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 50px;
  height: 25px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
