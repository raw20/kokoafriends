import { gql } from "@apollo/client";

export const USERS = gql`
  query Users {
    allUser {
      user_code
      kakao_id
      kakao_profile_img
      kakao_nickname
      kakao_email
      user_role
      create_time
    }
  }
`;
export const USER = gql`
  query User($userId: ID!) {
    me(id: $userId) {
      user_code
      kakao_id
      kakao_profile_img
      kakao_nickname
      kakao_email
      user_role
      create_time
    }
  }
`;
export const ADD_USER = gql`
  mutation AddUser(
    $userCode: userCodeScalar
    $createTime: DateTime
    $userRole: String
    $kakaoEmail: String
    $kakaoNickname: String
    $kakaoProfileImg: String
    $kakaoId: ID
  ) {
    addUser(
      user_code: $userCode
      create_time: $createTime
      user_role: $userRole
      kakao_email: $kakaoEmail
      kakao_nickname: $kakaoNickname
      kakao_profile_img: $kakaoProfileImg
      kakao_id: $kakaoId
    ) {
      user_code
      kakao_id
      kakao_profile_img
      kakao_nickname
      kakao_email
      user_role
      create_time
    }
  }
`;
