import { gql } from "@apollo/client";
import styled from "styled-components";

const BEST_ITEM = gql`
  query {
    bestItem {
      id
      name
      price
    }
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
`;

const ItemList = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  background-color: red;
`;
function BestProductItem() {
  return (
    <Wrap>
      <ItemList>dd</ItemList>
      <ItemList>dd</ItemList>
      <ItemList>dd</ItemList>
      <ItemList>dd</ItemList>
      <ItemList>dd</ItemList>
      <ItemList>dd</ItemList>
    </Wrap>
  );
}

export default BestProductItem;
