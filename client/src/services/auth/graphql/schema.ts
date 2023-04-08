import { gql } from "@apollo/client";

export const USERS = gql`
  query Users {
    allUser {
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
  query User($userId: String!) {
    me(id: $userId) {
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
    $createTime: DateTime
    $userRole: String
    $kakaoEmail: String
    $kakaoNickname: String
    $kakaoProfileImg: String
    $kakaoId: String
  ) {
    addUser(
      create_time: $createTime
      user_role: $userRole
      kakao_email: $kakaoEmail
      kakao_nickname: $kakaoNickname
      kakao_profile_img: $kakaoProfileImg
      kakao_id: $kakaoId
    ) {
      kakao_id
    }
  }
`;
