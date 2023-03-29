import { useMutation, useQuery } from "@apollo/client";
import { IMeData } from "../../../types/User.interface";
import { ADD_USER, USER, USERS } from "../graphql/schema";

function useLogin() {
  const { data: users } = useQuery(USERS);
  const { data: user } = useQuery<IMeData>(USER, {
    variables: { userId: "2444520737" },
  });
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: USERS }],
  });

  return { users, user, addUser };
}

export default useLogin;
