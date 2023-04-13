import styled from "styled-components";
import { LargeText } from "./Cart.style";

export const ReceiptBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 1rem 0;
  @media ${(props) => props.theme.mobile} {
    margin: 1rem 0;
    padding: 0;
  }
`;
export const ReceiptText = styled(LargeText)`
  font-weight: 600;
`;
export const ReceiptLeft = styled.div`
  width: 50%;
  text-align: left;
`;
export const ReceiptRight = styled.div`
  width: 50%;
  text-align: right;
`;
