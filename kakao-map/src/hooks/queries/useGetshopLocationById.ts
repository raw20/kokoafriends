import { useQuery } from "@apollo/client";
import { ShopLocation } from "../../../../kakao-map/src/types/shopLocation.interface";
import { SHOPLOCATION } from "../../graphql/schema";

function useGetshopLocationById(id: string | undefined) {
  const { data: shoplocation, loading } = useQuery<ShopLocation>(SHOPLOCATION,
      {
        variables:{
          selectItemId: Number(id),
        },
      });

  return { shoplocation, loading };
}

export default useGetshopLocationById;
