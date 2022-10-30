import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AllItem } from "../../interface/IDBdataType";

const BEST_ITEM = gql`
  query {
    item {
      sId
      sName
      sPrice
      slideImg
      sView
      sCategory
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
  width: 100%;
`;
const Inner = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  margin: 1.5rem auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemList = styled(Link)`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  &:hover {
    opacity: 0.7;
  }
  position: relative;
`;
const ItemBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ItemImg = styled.img`
  width: 300px;
  height: 300px;
  position: relative;
`;

const ItemLank = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  position: absolute;
  border-radius: 5px;
  top: 10%;
  left: 21%;
`;
const ItemBestLank = styled(ItemLank)`
  background-color: ${(props) => props.theme.secondColor};
`;
export const ItemName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: start;
  color: ${(props) => props.theme.secondColor};
`;
export const ItemPrice = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 1rem;
`;
function BestProductItem() {
  const {
    data,
    client: { cache },
  } = useQuery<AllItem>(BEST_ITEM);
  const bestItem = data?.item
    .map((ele) => ele)
    .sort((a, b) => b.sView - a.sView);

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
    <Wrap>
      <Title>지금 인기있는😍</Title>
      <Inner>
        {bestItem?.map((item, index) =>
          index < 6 ? (
            <ItemList
              onClick={() => {
                viewCount(item?.sId, item?.sView);
              }}
              to={`/bestProduct/${item?.sId}`}
              key={item?.sId}
            >
              <ItemBox>
                <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
                {index < 3 ? (
                  <ItemLank>{index + 1}</ItemLank>
                ) : (
                  <ItemBestLank>{index + 1}</ItemBestLank>
                )}
                <ItemName> {item?.sName}</ItemName>
                <ItemPrice>{item?.sPrice}원</ItemPrice>
              </ItemBox>
            </ItemList>
          ) : null
        )}
      </Inner>
    </Wrap>
  );
}

export default BestProductItem;
