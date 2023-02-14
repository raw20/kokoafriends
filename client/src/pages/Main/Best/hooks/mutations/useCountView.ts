import { useMutation } from "@apollo/client";
import { COUNT_VIEW, PRODUCTS } from "../../graphql/schema";

function useCountView() {
  const [countView] = useMutation(COUNT_VIEW, {
    refetchQueries: [{ query: PRODUCTS }, "Products"],
  });
  return countView;
}

export default useCountView;
