import * as jf from "joiful";
import {
  Arg,
  ObjectType,
  Field,
  Resolver,
  Mutation,
  Int,
  Query,
  ArgsType,
  Args,
} from "type-graphql";

@ObjectType()
class Cart {
  @Field({ nullable: true })
  cart_id: number;

  @Field({ nullable: true })
  products_id: number;

  @Field({ nullable: true })
  products_name: string;

  @Field({ nullable: true })
  products_amount: number;

  @Field({ nullable: true })
  products_price: number;

  @Field({ nullable: true })
  products_slideImg: string;
}
@ArgsType()
export class AddCartArgs {
  @Field({ nullable: true })
  @jf.number().required().min(0)
  cart_id: number;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  products_id: number;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  products_name: string;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  products_amount: number;

  @Field({ nullable: true })
  @jf.number().required().min(0)
  products_price: number;

  @Field({ nullable: true })
  @jf.string().required().min(0)
  products_slideImg: string;
}

@Resolver(Cart)
export class CartResolver {
  private cartList: Cart[] = [];
  @Query(() => [Cart])
  async getCart() {
    return await this.cartList;
  }
  @Mutation(() => Cart)
  async addCart(@Args() cart: AddCartArgs) {
    const cartProducts = await this.cartList.push({
      cart_id: cart.cart_id,
      products_id: cart.products_id,
      products_name: cart.products_name,
      products_amount: cart.products_amount,
      products_price: cart.products_price,
      products_slideImg: cart.products_slideImg,
    });
    return cartProducts;
  }
}
