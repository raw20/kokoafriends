export const CLIENT_ID = process.env.REACT_APP_REST_API_KEY
export const REDIRECT_URI = "http://192.168.1.185:3000/oauth/callback/kakao";
export const BASE_URL = 'http://localhost:8080/api';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


