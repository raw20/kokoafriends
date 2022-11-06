import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { AllItem, Item } from "../../../../interface/IDBdataType";

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
  width: 100%;
`;
const Inner = styled.div`
  width: 60%;
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
  height: auto;
  margin: 1rem auto;
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
  width: 280px;
  height: 280px;
  position: relative;
  border: 2px solid ${(props) => props.theme.borderColor};
  margin-bottom: 1rem;
  border-radius: 10px;
`;
export const ItemName = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: start;
  color: ${(props) => props.theme.secondColor};
`;
export const ItemPrice = styled.h1`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
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
      <Inner>
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
              <ItemBox>
                <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
                <ItemName> {item?.sName}</ItemName>
                <ItemPrice>{item?.sPrice}원</ItemPrice>
              </ItemBox>
            </ItemList>
          ))
        )}
      </Inner>
    </Wrap>
  );
}

export default SearchItemList;
