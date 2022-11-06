import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { AllItem, Item } from "../../../../interface/IDBdataType";
import {
  Inner,
  ItemBox,
  ItemImg,
  ItemList,
  ItemListInner,
  ItemName,
  ItemPrice,
  Wrap,
} from "../../../mainMenu/best/BestProductItem";

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
const NoSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
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
        <ItemListInner>
          {searchData.length === 0 ? (
            <NoSearch>
              <Text>검색 결과가 없습니다.</Text>
            </NoSearch>
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
        </ItemListInner>
      </Inner>
    </Wrap>
  );
}

export default SearchItemList;
