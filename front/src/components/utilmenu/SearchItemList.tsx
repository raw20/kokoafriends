import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { SearchItem, ItemObj } from "../../interface/dataType";

const SEARCH_RESULT_ITEM = gql`
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
function SearchItemList(searchData: SearchItem[]) {
  const {
    data,
    client: { cache },
  } = useQuery<ItemObj>(SEARCH_RESULT_ITEM);
  console.log("검색결과 : ", searchData);
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
      {/*   {searchData?.map((item: any) => (
        <ItemList
          onClick={() => {
            viewCount(item?.id, item?.view);
          }}
          to={`/bestProduct/${item?.id}`}
          key={item?.id}
        >
          <ItemImg src={`/img/product/${item?.slideImg[0]}`} />
          <ItemName> {item?.name}</ItemName>
          <ItemPrice>{item?.price}원</ItemPrice>
        </ItemList>
      ))} */}
    </Wrap>
  );
}

export default SearchItemList;
