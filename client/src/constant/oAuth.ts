export const CLIENT_ID = process.env.REACT_APP_JS_SDK_KEY;
export const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
export const BASE_URL = process.env.REACT_APP_CLINET_BASE_URL;
export const LOGIN_REDIRECT_URI = `${BASE_URL}/oauth/callback/kakao`;
export const LOGOUT_REDIRECT_URI = `${BASE_URL}/oauth/callback/kakao/logout`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${LOGIN_REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${CLIENT_ID}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
