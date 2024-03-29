import { useMutation, useQuery } from "@apollo/client";
import { IMeData } from "../../../types/User.interface";
import { ADD_USER, USER, USERS } from "../graphql/schema";
import { USER_CODE } from "../../../constant/storageKey";
import client from "../../../client";

function useLogin() {
  const { data: users } = useQuery(USERS);
  const { data: user } = useQuery<IMeData>(USER, {
    variables: { userId: localStorage.getItem(USER_CODE) },
  });
  const localUserData = client.readQuery<IMeData>({
    query: USER,
    variables: {
      userId: localStorage.getItem(USER_CODE),
    },
  });

  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: USERS }],
    onError: () => alert("login error"),
  });

  return { users, user, addUser, localUserData };
}

export default useLogin;
