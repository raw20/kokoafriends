import { useQuery } from "@apollo/client";
import { shopLocation } from "../../../../kakao-map/src/types/shopLocation.interface";
import { SHOPLOCATION } from "../../graphql/schema";

function useGetshopLocation() {
  const { data, loading } = useQuery<shopLocation>(SHOPLOCATION);

  return { data, loading };
}

export default useGetshopLocation;
