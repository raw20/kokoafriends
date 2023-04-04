import { useMutation, useQuery } from "@apollo/client";
import { IMeData } from "../../../types/User.interface";
import { ADD_USER, USER, USERS } from "../graphql/schema";
import { KAKAO_ID } from "../../../constant/storageKey";

function useLogin() {
  const { data: users } = useQuery(USERS);
  const { data: user } = useQuery<IMeData>(USER, {
    variables: { userId: localStorage.getItem(KAKAO_ID) },
  });

  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: USERS }],
    onCompleted: (data) => {
      if (data) localStorage.setItem(KAKAO_ID, data.addUser.kakao_id);
    },
    onError: () => alert("login error"),
  });

  return { users, user, addUser };
}

export default useLogin;
