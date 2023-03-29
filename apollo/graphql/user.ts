import * as jf from "joiful";
import { Arg, ID, Mutation, ObjectType, ArgsType, Args } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { addUserInfor, userById, users } from "../db/user.js";
import { userCodeScalarType } from "../scalar/customScalar.js";

@ObjectType()
class User {
  @Field(() => userCodeScalarType, { nullable: true })
  user_code: number;

  @Field(() => ID, { nullable: true })
  kakao_id: string;

  @Field({ nullable: true })
  kakao_profile_img: string;

  @Field({ nullable: true })
  kakao_nickname: string;

  @Field({ nullable: true })
  kakao_email: string;

  @Field({ nullable: true })
  user_role: string;

  @Field({ nullable: true })
  create_time: Date;
}

@ArgsType()
export class AddUserArgs {
  @Field(() => userCodeScalarType, { nullable: true })
  @jf.number().required().min(0)
  user_code: number;

  @Field(() => ID, { nullable: true })
  @jf.string().required().min(0)
  kakao_id: string;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  kakao_profile_img: string;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  kakao_nickname: string;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  kakao_email: string;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  user_role: string;

  @Field({ nullable: true })
  @jf.date().required().min(0)
  create_time: Date;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  allUser() {
    return users();
  }
  @Query(() => [User])
  me(@Arg("id", () => ID) id: string) {
    return userById(id);
  }
  @Mutation(() => User)
  async addUser(@Args() user: AddUserArgs) {
    const login = await addUserInfor(
      user.user_code,
      user.kakao_id,
      user.kakao_profile_img,
      user.kakao_nickname,
      user.kakao_email,
      user.user_role,
      user.create_time
    );
    return login;
  }
}
