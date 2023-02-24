export const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
export const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
export const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
export const LOGOUT_REDIRECT_URI =
  "http://localhost:3000/oauth/callback/kakao/logout";

export const BASE_URL = "http://localhost:3000";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${CLIENT_ID}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
