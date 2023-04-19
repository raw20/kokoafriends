import { useQuery } from "@apollo/client";
import { IProductComponent } from "../../../../types/IProps.interface";
import { SELECTED_PRODUCT } from "../../graphql/bestProductsSchema";

function useGetProductById(id?: string) {
  const { data } = useQuery<IProductComponent>(SELECTED_PRODUCT, {
    variables: {
      productId: Number(id),
    },
  });
  const productRating = data?.review
    ? data?.review
        .map((element) => element.review_rating)
        .reduce(function add(sum, curr) {
          return sum + curr;
        }, 0) / data?.review.length
    : 0;
  console.log(productRating);
  return { data, productRating };
}

export default useGetProductById;
