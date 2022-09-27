export const CLIENT_ID = process.env.REACT_APP_REST_API_KEY
export const REDIRECT_URI = "http://172.16.7.205:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


