import { useQuery } from "@apollo/client";
import { IProducts } from "../../../../types/Products.interface";
import { HOME_PRODUCTS } from "../../graphql/HomeSchema";

function useGetHomeProducts() {
  const { data, loading } = useQuery<IProducts>(HOME_PRODUCTS);

  return { data, loading };
}

export default useGetHomeProducts;
