import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER, USERS } from "../graphql/schema";

function useLogin() {
  const { data: users } = useQuery(USERS);
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: USERS }],
  });
  return { users, addUser };
}

export default useLogin;
