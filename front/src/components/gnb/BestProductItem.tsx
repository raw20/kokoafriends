import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemObj } from "../../interface/dataType";

const BEST_ITEM = gql`
  query {
    item {
      id
      name
      price
      slideImg
      view
      category
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
  margin: 1.5rem auto;
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
  position: relative;
`;

const ItemImg = styled.img`
  width: 300px;
  height: 300px;
  position: relative;
`;

const ItemLank = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  position: absolute;
  border-radius: 5px;
  top: 5%;
  left: 5%;
`;
const ItemBestLank = styled(ItemLank)`
  background-color: ${(props) => props.theme.secondColor};
`;
export const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondColor};
`;
export const ItemPrice = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 1rem;
`;
function BestProductItem() {
  const {
    data,
    client: { cache },
  } = useQuery<ItemObj>(BEST_ITEM);
  const bestItem = data?.item.map((ele) => ele).sort((a, b) => b.view - a.view);

  function viewCount(id: number, view: number) {
    cache.writeFragment({
      id: `Item:${Number(id)}`,
      fragment: gql`
        fragment ItemFragment on Item {
          view
        }
      `,
      data: {
        view: (view += 1),
      },
    });
  }
  return (
    <>
      <Title>지금 인기있는😍</Title>
      <Wrap>
        {bestItem?.map((item, index) =>
          index < 6 ? (
            <ItemList
              onClick={() => {
                viewCount(item?.id, item?.view);
              }}
              to={`/bestProduct/${item?.id}`}
              key={item?.id}
            >
              <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
              {index < 3 ? (
                <ItemLank>{index + 1}</ItemLank>
              ) : (
                <ItemBestLank>{index + 1}</ItemBestLank>
              )}
              <ItemName> {item?.name}</ItemName>
              <ItemPrice>{item?.price}원</ItemPrice>
            </ItemList>
          ) : null
        )}
      </Wrap>
    </>
  );
}

export default BestProductItem;
