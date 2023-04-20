import { useSearchParams } from "react-router-dom";
import { IProduct, IProducts } from "../../../../types/Products.interface";

function useFilterParams(
  firstParamsKey: string,
  secondParamsKey: string,
  data?: IProducts
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get(firstParamsKey);
  const filterValue = searchParams.get(secondParamsKey);
  const searchData = data?.products.filter((element) =>
    element.products_name.includes(searchValue!)
  );
  const filterData = getFilteringData(searchData);

  function getFilteringData(searchData?: IProduct[]) {
    if (filterValue === "null") {
      searchData?.sort((a, b) => a.products_id - b.products_id);
      return searchData;
    }
    if (filterValue === "popularity") {
      searchData?.sort((a, b) => a.products_view - b.products_view);
      return searchData;
    }
    if (filterValue === "price") {
      searchData?.sort(
        (a, b) =>
          Number(a.products_price.split(",").join("")) -
          Number(b.products_price.split(",").join(""))
      );
      return searchData;
    }
  }

  return {
    searchValue,
    filterValue,
    filterData,
    searchParams,
    setSearchParams,
  };
}

export default useFilterParams;
