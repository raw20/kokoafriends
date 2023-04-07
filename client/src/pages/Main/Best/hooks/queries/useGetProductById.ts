import { useQuery } from "@apollo/client";
import { IProductComponent } from "../../../../../types/IProps.interface";
import { PRODUCT } from "../../graphql/schema";

function useGetProductById(id?: string) {
  const { data, loading } = useQuery<IProductComponent>(PRODUCT, {
    variables: {
      productId: Number(id),
    },
  });

  return { data, loading };
}

export default useGetProductById;
