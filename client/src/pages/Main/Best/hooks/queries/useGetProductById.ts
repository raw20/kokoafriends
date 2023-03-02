import { useQuery } from "@apollo/client";
import { ProductComponent } from "../../../../../types/IProps.interface";
import { PRODUCT } from "../../graphql/schema";

function useGetProductById(id: string | undefined) {
  const { data: product, loading } = useQuery<ProductComponent>(PRODUCT, {
    variables: {
      selectItemId: Number(id),
    },
  });
  return { product, loading };
}

export default useGetProductById;
