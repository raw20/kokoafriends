import { gql } from "@apollo/client";

export const USERAUTHORIZATION = gql`
  query UserAuthorization {
    userAuthorization {
      authorization_code
    }
  }
`;

export const GET_AUTHORIZATION = gql`
  mutation GetUserAuthorization($code: String!) {
    getUserAuthorization(authorization_code: $code) {
      authorization_code
    }
  }
`;
