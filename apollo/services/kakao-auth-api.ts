import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";

export class KakaoLoginAuthorAPI extends RESTDataSource {
  override baseURL = "https://kauth.kakao.com";

  async getUserAuthorize(code: string) {
    const HOST = "https://kauth.kakao.com";
    const client = "http://localhost:3000";
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
  async getUserAccessToken(code: string) {
    const HOST = "https://kauth.kakao.com";
    const client = "http://localhost:3000";
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
    console.log("sex2",data);
    return data.access_token;
  }
}
