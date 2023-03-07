import { useMutation } from "@apollo/client";
import { ADD_USER, USERS } from "../graphql/schema";

function useLogin() {
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: USERS }, "users"],
  });
  return addUser;
}

export default useLogin;
