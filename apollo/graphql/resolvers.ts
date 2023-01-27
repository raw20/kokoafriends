import { countView, productById, products } from "../db/products.js";
import {
  deleteReview,
  postReview,
  reviewById,
  reviews,
} from "../db/reviews.js";
import { user } from "../db/user.js";

let nowUser = [];
let cart = [];

export const resolvers = {
  Query: {
    products: () => products(),
    user: () => user(),
    cart: () => cart,
    product: (root: any, { id }) => productById(id),
    reviews: () => reviews(),
    review: (root: any, { id }) => reviewById(id),
  },

  Mutation: {
    postReviews: (root: any, { rId, sId, user_code, rReview }) => {
      return postReview(rId, sId, user_code, rReview);
    },
    deleteReviews(root: any, { id }) {
      return deleteReview(id);
    },

    countViews(root: any, { id }) {
      return countView(id);
    },
    addCart: (
      root: any,
      { cartId, sId, sName, sPrice, bCount, slideImg, check }
    ) => {
      const ItemId = {
        cartId,
        sId,
        sName,
        sPrice,
        bCount,
        slideImg,
        check,
      };
      cart.push(ItemId);
      return ItemId;
    },
    checkAdd: (root: any, { index }) => {
      cart[index].check = true;
      return cart;
    },
    checkDelete: (root: any, { index }) => {
      cart[index].check = false;
      return cart;
    },

    updateBCount: (root: any, { index, bCount }) => {
      cart[index].bCount = bCount;
      return cart;
    },
    deleteCartItem: (root: any, { cartId }) => {
      const findCart = cart.find((cart) => cart.cartId === cartId);
      if (!findCart) return false;
      cart = cart.filter((cart) => cart.cartId !== cartId);
      return true;
    },
  },
};
