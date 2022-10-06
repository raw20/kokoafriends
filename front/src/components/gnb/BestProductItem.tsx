import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BestItemObj } from "../../interface/dataType";

const BEST_ITEM = gql`
  query {
    bestItem {
      id
      name
      price
      slideImg
    }
  }
`;
const Title = styled.h1`
  margin-top: 2.1rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  word-spacing: -0.5rem;
`;
const Wrap = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  margin: 0 auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemList = styled(Link)`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    opacity: 0.7;
  }
`;
const ItemImg = styled.img`
  width: 300px;
  height: 300px;
`;
const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondColor};
`;
const ItemPrice = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
`;
function BestProductItem() {
  const { data } = useQuery<BestItemObj>(BEST_ITEM);
  return (
    <>
      <Title>지금 인기있는😍</Title>
      <Wrap>
        {data?.bestItem.map((item: any) => (
          <ItemList to={`/bestProduct/${item?.id}`} key={item?.id}>
            <ItemImg src={`/img/best/${item?.slideImg[0]}`} />
            <ItemName> {item?.name}</ItemName>
            <ItemPrice>{item?.price}원</ItemPrice>
          </ItemList>
        ))}
      </Wrap>
    </>
  );
}

export default BestProductItem;
