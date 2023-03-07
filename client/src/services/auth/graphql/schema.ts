import { gql } from "@apollo/client";

export const USERS = gql`
  query Users {
    users {
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
  mutation Mutation(
    $createTime: DateTime!
    $userRole: String!
    $kakaoEmail: String!
    $kakaoNickname: String!
    $kakaoProfileImg: String!
    $kakaoId: ID!
    $userCode: Int!
  ) {
    addUser(
      create_time: $createTime
      user_role: $userRole
      kakao_email: $kakaoEmail
      kakao_nickname: $kakaoNickname
      kakao_profile_img: $kakaoProfileImg
      kakao_id: $kakaoId
      user_code: $userCode
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
