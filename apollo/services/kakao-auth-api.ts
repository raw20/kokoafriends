import { RESTDataSource } from "@apollo/datasource-rest";
import { OauthToken } from "./OauthToken";

export const HOST = "https://kauth.kakao.com";
export const client = "http://localhost:3000";

export class KakaoLoginAuthorAPI extends RESTDataSource {
  async getAuthorize(code: string) {
    const baseURL = `${HOST}/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${code}&response_type=code`;
    const data = await this.get(baseURL, {
      params: {
        client_id: `${process.env.REST_API_KEY}`,
        redirect_uri: `${client}/oauth/callback/kakao`,
        response_type: "code",
      },
    }).catch((error: any) => console.log(error));
    return data;
  }
}

export class KakaoLoginAccessTokenAPI extends RESTDataSource {
  private responseToken: OauthToken[] = [];

  async getAccessToken(code: string) {
    const baseURL = `${HOST}/oauth/token`;
    const data = await this.post(baseURL, {
      params: {
        grant_type: "authorization_code",
        client_id: `${process.env.REST_API_KEY}`,
        redirect_uri: `${client}/oauth/callback/kakao`,
        code: `${code}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
      },
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).catch((error: any) => console.log(error));
    this.responseToken.push(data);
    return this.responseToken;
  }
}

export class KakaoLoginUserAPI extends RESTDataSource {
  async getUser(code: string, token: string) {
    const HOST = "https://kapi.kakao.com";
    const baseURL = `${HOST}/v2/user/me`;

    const data = await this.post(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).catch((error: any) => console.log(error));
    return data;
  }
}
