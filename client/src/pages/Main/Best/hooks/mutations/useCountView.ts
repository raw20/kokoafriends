import { useMutation } from "@apollo/client";
import { COUNT_VIEW, PRODUCTS } from "../../graphql/schema";

function useCountView() {
  const [countViews] = useMutation(COUNT_VIEW, {
    refetchQueries: [{ query: PRODUCTS }, "Products"],
  });
  return countViews;
}

export default useCountView;
