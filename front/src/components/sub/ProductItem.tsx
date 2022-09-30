import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_BEST_ITEM = gql`
  query ($selectBestItemId: Int!) {
    selectBestItem(id: $selectBestItemId) {
      id
      name
      title
      bannerImg
      contents
      price
      like
      view
      comment
      slideImg
      mainTopImg
      mainMidImg
      mainBottomImg
    }
  }
`;

const Wrap = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

function ProductItem() {
  const { id } = useParams();
  const { data } = useQuery(GET_BEST_ITEM, {
    variables: {
      selectBestItemId: Number(id),
    },
  });
  return <Wrap>{data?.selectBestItem.title}</Wrap>;
}

export default ProductItem;
