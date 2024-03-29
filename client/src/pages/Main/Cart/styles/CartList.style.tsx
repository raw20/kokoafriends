import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import { ProductImage } from "../../../../styles/Common.style";

export const CartListBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0.3rem 0;
  background-color: #fff;
`;

export const BoxLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const BoxRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartProductImage = styled(ProductImage)``;

export const DeleteButton = styled(MdDeleteForever)`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.jaygColor};
`;
