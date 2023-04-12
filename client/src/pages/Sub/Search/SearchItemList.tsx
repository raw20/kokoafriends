import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { IProducts } from "../../../types/Products.interface";

const SEARCH_RESULT_ITEM = gql`
  query Item {
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
const VIEW_COUNT = gql`
  mutation ViewCount($viewCountId: Int) {
    viewCount(id: $viewCountId) {
      sId
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

function SearchItemList({ searchData }: { searchData: IProducts[] }) {
  /*   const [viewCount] = useMutation(VIEW_COUNT, {
    refetchQueries: [{ query: SEARCH_RESULT_ITEM }, "Item"],
  });
  function viewCountHandler(id: number) {
    viewCount({
      variables: {
        viewCountId: Number(id),
      },
    });
  } */
  return (
    <></>
    /*     <Wrap>
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
                  viewCountHandler(item?.sId);
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
    </Wrap> */
  );
}

export default SearchItemList;
