import { Arg, ID, ObjectType } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { userById, users } from "../db/user.js";

@ObjectType()
class User {
  @Field()
  user_code: number;

  @Field((type) => ID)
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
  async users() {
    return users();
  }
  @Query((returns) => [User])
  async user(@Arg("id", (type) => ID!) id: string) {
    return userById(id);
  }
}
