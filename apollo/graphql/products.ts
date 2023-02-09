import {
  Arg,
  ObjectType,
  Field,
  Resolver,
  Mutation,
  Int,
  Query,
} from "type-graphql";
import { products } from "../db/products.js";
import { productById } from "../db/products.js";
import { countView } from "../db/products.js";

@ObjectType()
class Products {
  @Field({ nullable: true })
  sId: number;

  @Field({ nullable: true })
  sName: string;

  @Field({ nullable: true })
  sTitle: string;

  @Field({ nullable: true })
  sContents: string;

  @Field({ nullable: true })
  sPrice: number;

  @Field({ nullable: true })
  sLike: number;

  @Field({ nullable: true })
  sView: number;

  @Field({ nullable: true })
  sHalf_title: string;

  @Field({ nullable: true })
  sCategory: string;

  @Field((type) => [String], { nullable: true })
  slideImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  mainTopImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  mainMidImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  mainBottomImg: string[] | null;
}

@Resolver(Products)
export class ProductsResolver {
  @Query((returns) => [Products])
  async products() {
    return products();
  }
  @Query((returns) => Products)
  async product(@Arg("id", (type) => Int) id: number) {
    return productById(id);
  }
  @Mutation((returns) => Products)
  countViews(@Arg("id", (type) => Int) id: number) {
    return countView(id);
  }
}
