import { Arg, Mutation, ObjectType } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";

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

    return userAuthCode;
  }
}
