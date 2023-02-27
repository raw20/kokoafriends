import { Arg, Mutation, ObjectType } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import {
  KakaoLoginAuthorAPI,
  KakaoLoginAccessTokenAPI,
  KakaoLoginUserAPI,
} from "../services/kakao-auth-api.js";

@ObjectType()
class UserAuthorization {
  @Field({ nullable: true })
  authorization_code: string;
}

@Resolver(UserAuthorization)
export class UserAuthorizationResolver {
  private userAuthorizationCode: UserAuthorization[] = [];

  @Query((returns) => [UserAuthorization])
  async userAuthorization() {
    return this.userAuthorizationCode;
  }
  @Mutation((returns) => UserAuthorization)
  async getUserAuthorization(
    @Arg("authorization_code", (type) => String) authorization_code: string
  ) {
    if (this.userAuthorizationCode.length > 0) this.userAuthorizationCode.pop();
    const userAuthCode = { authorization_code };
    this.userAuthorizationCode.push(userAuthCode);

    const authAPI = new KakaoLoginAuthorAPI();
    const tokenAPI = new KakaoLoginAccessTokenAPI();
    const userAPI = new KakaoLoginUserAPI();

    const response = await tokenAPI.getAccessToken(authorization_code);
    const token = response[0].access_token;

    authAPI.getAuthorize(authorization_code);
    tokenAPI.getAccessToken(authorization_code);
    userAPI.getUser(authorization_code, token);

    return authorization_code;
  }
}
