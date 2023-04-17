import { useQuery } from "@apollo/client";
import { IProducts } from "../../../../types/Products.interface";
import { BEST_PRODUCTS } from "../../graphql/bestProductsSchema";

function useGetBestProducts() {
  const { data, loading } = useQuery<IProducts>(BEST_PRODUCTS);

  return { data, loading };
}

export default useGetBestProducts;
