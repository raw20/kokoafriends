import { countView, productById, products } from "../db/products.js";
import { deleteReview, postReview, reviewById, reviews, } from "../db/reviews.js";
import { user } from "../db/user.js";
let nowUser = [];
let cart = [];
export const resolvers = {
    Query: {
        products: () => products(),
        user: () => user(),
        cart: () => cart,
        product: (root, { id }) => productById(id),
        reviews: () => reviews(),
        review: (root, { id }) => reviewById(id),
    },
    Mutation: {
        postReviews: (root, { rId, sId, user_code, rReview }) => {
            return postReview(rId, sId, user_code, rReview);
        },
        deleteReviews(root, { id }) {
            return deleteReview(id);
        },
        countViews(root, { id }) {
            return countView(id);
        },
        addCart: (root, { cartId, sId, sName, sPrice, bCount, slideImg, check }) => {
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
        checkAdd: (root, { index }) => {
            cart[index].check = true;
            return cart;
        },
        checkDelete: (root, { index }) => {
            cart[index].check = false;
            return cart;
        },
        updateBCount: (root, { index, bCount }) => {
            cart[index].bCount = bCount;
            return cart;
        },
        deleteCartItem: (root, { cartId }) => {
            const findCart = cart.find((cart) => cart.cartId === cartId);
            if (!findCart)
                return false;
            cart = cart.filter((cart) => cart.cartId !== cartId);
            return true;
        },
    },
};
