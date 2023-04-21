import { useMutation } from "@apollo/client";
import { COUNT_VIEW, HOME_PRODUCTS } from "../../graphql/HomeSchema";

function useCountView() {
  const [countViews] = useMutation(COUNT_VIEW, {
    refetchQueries: [{ query: HOME_PRODUCTS }, "Products"],
  });
  return countViews;
}

export default useCountView;
