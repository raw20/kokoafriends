import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../../components/loading/Loading";
import { AllItem } from "../../../interface/IDBdataType";
const BEST_ITEM = gql`
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
const Title = styled.h1`
  margin-top: 2.1rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  word-spacing: -0.5rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;
export const Wrap = styled.div`
  width: 100%;
`;
export const Inner = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  margin: 1.5rem auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const ItemListInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-rows: 450px 450px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 200px 200px;
    grid-template-rows: 250px 250px;
  }
`;
export const ItemList = styled(Link)`
  width: 80%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;
export const ItemBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const ItemImg = styled.img`
  width: 280px;
  height: 280px;
  border: 2px solid ${(props) => props.theme.borderColor};
  margin-bottom: 1rem;
  border-radius: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 180px;
    height: 180px;
  }
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
  top: 3%;
  left: 3%;
  @media ${(props) => props.theme.mobile} {
    width: 20px;
    height: 20px;
  }
`;
const ItemBestLank = styled(ItemLank)`
  background-color: ${(props) => props.theme.secondColor};
`;
export const ItemName = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.secondColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;
export const ItemPrice = styled.h1`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  color: ${(props) => props.theme.accentColor};
  margin: 1rem 0;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
    margin: 0;
  }
`;
function BestProductItem() {
  const { data, loading } = useQuery<AllItem>(BEST_ITEM);
  const [viewCount] = useMutation(VIEW_COUNT, {
    refetchQueries: [{ query: BEST_ITEM }, "Item"],
  });
  const bestItem = data?.item
    .map((ele) => ele)
    .sort((a, b) => b.sView - a.sView);

  function viewCountHandler(id: number) {
    viewCount({
      variables: {
        viewCountId: Number(id),
      },
    });
  }
  return (
    <Wrap>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Title>지금 인기있는😍</Title>
          <Inner>
            <ItemListInner>
              {bestItem?.map((item, index) =>
                index < 6 ? (
                  <ItemList
                    onClick={() => {
                      viewCountHandler(item?.sId);
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
            </ItemListInner>
          </Inner>
        </>
      )}
    </Wrap>
  );
}

export default BestProductItem;
