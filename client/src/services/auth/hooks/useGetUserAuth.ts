import { useQuery } from "@apollo/client";
import { USERAUTHORIZATION } from "../graphql/schema";

interface Auth {
  authorization_code: string;
}

function useGetUserAuth() {
  const { data: auth } = useQuery<Auth>(USERAUTHORIZATION);

  return { auth };
}

export default useGetUserAuth;
