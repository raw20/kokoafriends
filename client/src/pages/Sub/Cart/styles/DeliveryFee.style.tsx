import styled from "styled-components";
import { SecondMediumText } from "./Cart.style";

export const DeliveryFeeBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const DeliveryFeeTextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 1rem;
`;

export const DeliveryFeeBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.muziColor};
  border-radius: 5px;
`;
export const DeliveryFeeBarFull = styled.div<{ priceSize: number }>`
  width: ${(props) =>
    props.priceSize >= 30000 ? 100 : props.priceSize / 300}%;
  background-color: ${(props) => props.theme.apeachColor};
  color: ${(props) => props.theme.apeachColor};
  border-radius: 5px;
  display: flex;
  justify-content: start;
  animation: blink 0.6s ease-in-out infinite alternate;

  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DeliveryFeeText = styled(SecondMediumText)`
  color: ${(props) => props.theme.apeachColor};
`;
