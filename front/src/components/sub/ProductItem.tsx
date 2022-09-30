import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BestItem, BestItemObj } from "../../interface/dataType";

const GET_BEST_ITEM = gql`
  query ($selectBestItemId: Int!) {
    selectBestItem(id: $selectBestItemId) {
      title
      id
    }
  }
`;

function ProductItem() {
  const { id } = useParams();
  const { data, loading } = useQuery<BestItemObj>(GET_BEST_ITEM, {
    variables: {
      selectBestItemId: Number(id),
    },
  });
  console.log("data : ", data?.selectBestItem.id);
  return <div>{data?.selectBestItem.title}</div>;
}

export default ProductItem;
