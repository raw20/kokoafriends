import * as jf from "joiful";
import { Arg, ID, Mutation, ObjectType, ArgsType, Args } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { addUser, userById, users } from "../db/user.js";
import { userCodeScalarType } from "../scalar/customScalar.js";

@ObjectType()
class User {
  @Field((type) => userCodeScalarType!)
  user_code: number;

  @Field((type) => ID!)
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

@ArgsType()
export class AddUserArgs {
  @Field((type) => userCodeScalarType!)
  @jf.number().required().min(0)
  user_code: number;

  @Field((type) => ID!)
  @jf.string().required().min(0)
  kakao_id: string;

  @Field((type) => String!)
  @jf.string().required().min(0)
  kakao_profile_img: string;

  @Field((type) => String!)
  @jf.string().required().min(0)
  kakao_nickname: string;

  @Field((type) => String!)
  @jf.string().required().min(0)
  kakao_email: string;

  @Field((type) => String!)
  @jf.string().required().min(0)
  user_role: string;

  @Field((type) => Date!)
  @jf.date().required().min(0)
  create_time: Date;
}

@Resolver(User!)
export class UserResolver {
  @Query((returns) => [User]!)
  async users() {
    return users();
  }
  @Query((returns) => [User]!)
  async user(@Arg("id", (type) => userCodeScalarType!) id: number) {
    return userById(id);
  }
  @Mutation((returns) => User!)
  async addUser(@Args() options: AddUserArgs) {
    return addUser(
      options.user_code,
      options.kakao_id,
      options.kakao_profile_img,
      options.kakao_nickname,
      options.kakao_email,
      options.user_role,
      options.create_time
    );
  }
}
