import { useQuery } from "@apollo/client";
import { ProductComponent } from "../../../../../types/IProps.interface";
import { PRODUCT } from "../../graphql/schema";

function useGetProductById(id: string | undefined) {
  const { data, loading } = useQuery<ProductComponent>(PRODUCT, {
    variables: {
      selectItemId: Number(id),
    },
  });
  return { data, loading };
}

export default useGetProductById;
