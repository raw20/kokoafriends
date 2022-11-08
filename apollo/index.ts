import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  allUserBuyItemList,
  buyItem,
  selectUserBuyItemList,
} from "./db/buyItem.js";
import {
  comments,
  deleteComment,
  getContentsComment,
  postComment,
} from "./db/comment.js";
import { contents, countLike, getContentsId } from "./db/contents.js";
import { getItemId, item, viewCount } from "./db/Item.js";
import { clickLiked, likeContents } from "./db/likeContents.js";
import {
  deleteReview,
  getItemReview,
  postReview,
  review,
} from "./db/review.js";
import { user } from "./db/user.js";

let nowUser = [];
let cart = [];
const typeDefs = `#graphql
  type Item {
    sId: Int
    sName: String!
    sTitle: String!
    sContents: String!
    sPrice: Int!
    sLike: Int!
    sView: Int
    sHalf_title:String!
    sCategory:String!
    slideImg: [String]!
    mainTopImg: [String]!
    mainMidImg: [String]!
    mainBottomImg: [String]!
  }
  type User{
    user_code : Int
    kakao_id : String
    kakao_profile_img : String
    kakao_nickname : String
    kakao_email : String
    user_role : String
    create_time : Date
  }

  type Contents {
    cId : Int!
    cWriter : String!
    cProfileImg : String!
    cImage : String!
    cTitle : String!
    cContent : String!
    cDate : String!
    cLike : Int
    comment : String
    kakao_nickname : String
  }
  type Comment {
    tId : Int
    cId : Int
    user_code : Int
    comment : String
    kakao_nickname : String
    co_date : Date
  }
  type Review {
    rId : Int
    sId : Int
    user_code : Int
    rReview : String
    kakao_nickname : String
    rDate : Date
  }
  type BuyItem {
    bId: Int
    sId : Int
    user_code: Int
    bDate : Date
    sName: String
    sPrice: Int
    bCount:Int
    slideImg: [String]
    cartId: Int
  }
  type LikeContents {
    lId : Int,
    user_code : Int,
    cId : Int,
    like_check : Int
  }
  type Query {
    item : [Item]!
    selectItem(id:Int!) : [Item]!
    contents : [Contents]!
    selectContents(id:Int!) : [Contents]!
    comments : [Comment]
    user : [User]
    myProfile : [User]
    review : [Review]
    selectReview (id:Int!) : [Review]
    selectComment (id:Int!) : [Comment]
    nowUser : [User]
    cartList : [BuyItem]
    allUserBuyItemList : [BuyItem]
    selectUserBuyItemList (user_code:Int!) : [BuyItem]
    likeContents: [LikeContents]
  }
  scalar Date
  type Mutation {
    postReviews(rId:Int, sId:Int, user_code:Int, rReview:String ) : Review
    deleteReviews(id:Int!) : Review
    postComments( tId: Int, cId: Int,user_code: Int, comment: String) : Comment
    deleteComments(id:Int!) : Comment
    logInUser(user_code:Int!,kakao_id:String!,kakao_profile_img:String,kakao_nickname:String!, kakao_email:String!,user_role:String!,create_time:Date) : User
    logOutUser:User
    buyItems(bId:Int! sId:Int!, user_code:Int!,bCount:Int!) : BuyItem
    addCart(cartId:Int!,sId:Int!,sName: String!,sPrice: Int!, bCount:Int!, slideImg: [String]!): BuyItem 
    clickLiked(lId:Int! user_code:Int! cId:Int! like_check:Int) : LikeContents
    countLike(cId:Int! cLike:Int) : Contents
    updateBCount(cartId:Int, bCount:Int): BuyItem
    deleteCartItem(cartId:Int): BuyItem
    viewCount(id:Int) : Item
  }
    scalar Date

`;

const resolvers = {
  Query: {
    item: () => item(),
    contents: () => contents(),
    comments: () => comments(),
    user: () => user(),
    nowUser: () => nowUser,
    cartList: () => cart,
    selectItem: (root: any, { id }) => getItemId(id),
    selectContents: (root: any, { id }) => getContentsId(id),
    review: () => review(),
    selectReview: (root: any, { id }) => getItemReview(id),
    selectComment: (root: any, { id }) => getContentsComment(id),
    allUserBuyItemList: () => allUserBuyItemList(),
    selectUserBuyItemList: (root: any, { user_code }) =>
      selectUserBuyItemList(user_code),
    likeContents: () => likeContents(),
  },

  Mutation: {
    postReviews: (root: any, { rId, sId, user_code, rReview }) => {
      return postReview(rId, sId, user_code, rReview);
    },
    deleteReviews(root: any, { id }) {
      return deleteReview(id);
    },
    postComments: (root: any, { tId, cId, user_code, comment }) => {
      return postComment(tId, cId, user_code, comment);
    },
    deleteComments(root: any, { id }) {
      return deleteComment(id);
    },
    logInUser(
      root: any,
      {
        user_code,
        kakao_id,
        kakao_profile_img,
        kakao_nickname,
        kakao_email,
        user_role,
        create_time,
      }
    ) {
      const me = {
        user_code,
        kakao_id,
        kakao_profile_img,
        kakao_nickname,
        kakao_email,
        user_role,
        create_time,
      };
      nowUser.push(me);
      if (nowUser.length > 1) {
        nowUser = [];
        nowUser.push(me);
      }
      return me;
    },
    logOutUser: () => (nowUser = []),
    buyItems: (root: any, { bId, sId, user_code, bCount }) => {
      return buyItem(bId, sId, user_code, bCount);
    },
    viewCount(root: any, { id }) {
      return viewCount(id);
    },
    addCart: (root: any, { cartId, sId, sName, sPrice, bCount, slideImg }) => {
      const ItemId = {
        cartId,
        sId,
        sName,
        sPrice,
        bCount,
        slideImg,
      };
      cart.push(ItemId);
      return ItemId;
    },
    clickLiked: (root: any, { lId, user_code, cId, like_check }) => {
      return clickLiked(lId, user_code, cId, like_check);
    },
    countLike: (root: any, { cId, cLike }) => {
      return countLike(cId, cLike);
    },
    updateBCount: (root: any, { cartId, bCount }) => {
      cart[cartId - 1].bCount = bCount;
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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server listening at: ${url}`);
})();
