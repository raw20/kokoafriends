import { ObjectType, Field, Resolver, Query, Arg } from "type-graphql";

@ObjectType() // typeDefs 병합
export class MainItem {
  @Field()
  id!: number;
  @Field()
  title!: string;
  @Field()
  img!: string;
  @Field()
  contents!: string;
}
@Resolver(MainItem)
export class MainItemResolver {
  @Query((returns) => MainItem, { nullable: true })
  async get_mainItem(
    @Arg("id", (type) => Number) id: number
  ): Promise<MainItem | null> {
    const res = await fetch("db/mainBannerData.json");
    const json = await res.json();
    return json.data;
  }
}
