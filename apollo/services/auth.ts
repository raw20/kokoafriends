import fetch, { RequestInit } from "node-fetch";

const CLIENT_URL = "http://localhost:3000";

export const generateUserModel = ({ req }) => ({
  getAll: () => {
    return fetch(`${CLIENT_URL}/oauth/callback/kakao`, {});
  },
});
