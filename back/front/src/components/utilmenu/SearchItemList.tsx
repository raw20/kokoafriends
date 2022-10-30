import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { AllItem, Item } from "../../interface/IDBdataType";

const SEARCH_RESULT_ITEM = gql`
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
const Wrap = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  margin: 0 auto;
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
  margin: 0 auto;
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
function SearchItemList({ searchData }: { searchData: Item[] }) {
  const {
    client: { cache },
  } = useQuery<AllItem>(SEARCH_RESULT_ITEM);

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
      {searchData.length === 0 ? (
        <h2>검색 결과 없음</h2>
      ) : (
        searchData?.map((item) => (
          <ItemList
            onClick={() => {
              viewCount(item?.sId, item?.sView);
            }}
            to={`/bestProduct/${item?.sId}`}
            key={item?.sId}
          >
            <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
            <ItemName> {item?.sName}</ItemName>
            <ItemPrice>{item?.sPrice}원</ItemPrice>
          </ItemList>
        ))
      )}
    </Wrap>
  );
}

export default SearchItemList;
