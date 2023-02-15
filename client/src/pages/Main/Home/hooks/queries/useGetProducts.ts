import { useQuery } from "@apollo/client";
import { Products } from "../../../../../types/Products.interface";
import { PRODUCTS } from "../../graphql/schema";

function useGetProducts() {
  const { data, loading } = useQuery<Products>(PRODUCTS);

  return { data, loading };
}

export default useGetProducts;
