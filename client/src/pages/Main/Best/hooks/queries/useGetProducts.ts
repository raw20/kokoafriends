import { useQuery } from "@apollo/client";
import { IProducts } from "../../../../../types/Products.interface";
import { PRODUCTS } from "../../graphql/schema";

function useGetProducts() {
  const { data, loading } = useQuery<IProducts>(PRODUCTS);

  return { data, loading };
}

export default useGetProducts;
