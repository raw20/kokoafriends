import { ObjectType } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { user } from "../db/user.js";

@ObjectType()
class User {
  @Field()
  user_code: number;

  @Field()
  kakao_id: string;

  @Field()
  kakao_profile_img: string;

  @Field()
  kakao_nickname: string;

  @Field()
  kakao_email: string;

  @Field()
  user_role: string;

  @Field()
  create_time: Date;
}

@Resolver(User)
export class UserResolver {
  @Query((returns) => [User])
  async user() {
    return user();
  }
}
