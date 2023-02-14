import { useQuery } from "@apollo/client";
import { Products } from "../../../../../types/Products.interface";
import { PRODUCTS } from "../../graphql/schema";

function useGetProducts() {
  const { data: products, loading } = useQuery<Products>(PRODUCTS);

  return { products, loading };
}

export default useGetProducts;
