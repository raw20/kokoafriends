import { useMutation } from "@apollo/client";
import { GET_AUTHORIZATION, USERAUTHORIZATION } from "../graphql/schema";

function useLoginAuth() {
  const [getUserAuthorization] = useMutation(GET_AUTHORIZATION, {
    refetchQueries: [{ query: USERAUTHORIZATION }, "UserAuthorization"],
  });

  return getUserAuthorization;
}

export default useLoginAuth;
