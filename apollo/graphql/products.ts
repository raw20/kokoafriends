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
  products_id: number;

  @Field({ nullable: true })
  products_name: string;

  @Field({ nullable: true })
  products_title: string;

  @Field({ nullable: true })
  products_contents: string;

  @Field({ nullable: true })
  products_price: number;

  @Field({ nullable: true })
  products_like: number;

  @Field({ nullable: true })
  products_view: number;

  @Field({ nullable: true })
  products_half_title: string;

  @Field({ nullable: true })
  products_category: string;

  @Field((type) => [String], { nullable: true })
  products_slideImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  products_mainTopImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  products_mainMidImg: string[] | null;

  @Field((type) => [String], { nullable: true })
  products_mainBottomImg: string[] | null;
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
