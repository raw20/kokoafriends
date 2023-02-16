import { useQuery } from "@apollo/client";
import {ShopLocation, Shoplocations} from "../../../../kakao-map/src/types/shopLocation.interface";
import { SHOPLOCATION } from "../../graphql/schema";

function useGetshopLocation() {
  const { data, loading } = useQuery<Shoplocations>(SHOPLOCATION);

  return { data,loading };
}

export default useGetshopLocation;
