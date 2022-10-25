import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { comments, deleteId } from "./db/comment.js";
import { contents, getContentsId } from "./db/contents.js";
import { item, getItemId } from "./db/Item.js";
import { deleteItemId, reviews } from "./db/review.js";
import { user } from "./db/user.js";

let aboutMe = [];
let purchaseList = [];
const typeDefs = `#graphql
  type Item {
    id: Int!
    name: String!
    title: String!
    contents:String!
    price: Int!
    like: Int!
    view: Int!
    reviews : [Review]
    half_title: String!
    category:String!
    slideImg: [String]!
    mainTopImg:[String]!
    mainMidImg:[String]!
    mainBottomImg:[String]! 
  }
  type Contents {
    id : Int!
    writer : String!
    profileImg : String!
    image : String!
    title : String!
    content : String!
    date : String!
    like : Int!
    comments : [Comment]
  }
  type Review {
    id : Int!
    product_id : Int!
    kakaoId : String
    writer : User
    review : String!
    date : String!
  }
  type Comment {
    id : Int!
    contents_id : Int!
    kakaoId : String
    writer : User
    comment : String!
    date : String!
  }
  type User{
    id: Int
    kakaoId: String
    name: String
  }
  type Query {
    item: [Item]!
    contents : [Contents]
    selectContents (id:Int!) : Contents
    comments(id:Int!) : [Comment]
    reviews(id:Int!): [Review]
    selectItem(id:Int!) : Item
    allUser:[User]!
    aboutMe:[User]!
  }
  type Mutation {
    postReview(kakaoId:String!,product_id:Int!,review:String!) : Review
    postComment(kakaoId:String!,contents_id:Int!,comment:String!) : Comment
    deleteReview(id:Int!) : Review
    deleteComment(id:Int!) : Comment
    addUser(kakaoId:String!,name:String!): User
  }
`;
const writeComment = new Date();
const year = writeComment.getFullYear();
const month = writeComment.getMonth() + 1;
const day = writeComment.getDate();
const resolvers = {
  Query: {
    item: () => item,
    contents: () => contents,
    selectContents: (root: any, { id }) => getContentsId(id),
    comments: (root: any, { id }) =>
      comments.filter((comment) => comment.contents_id === id),
    reviews: (root: any, { id }) =>
      reviews.filter((review) => review.product_id === id),
    selectItem: (root: any, { id }) => getItemId(id),
    allUser: () => user,
    aboutMe: () => aboutMe,
  },
  Item: {
    reviews({ id }) {
      return reviews.filter((review) => review.product_id === id);
    },
  },
  Contents: {
    comments({ id }) {
      return comments.filter((comments) => comments.contents_id === id);
    },
  },
  Review: {
    writer({ kakaoId }) {
      return user.find((user) => user.kakaoId === kakaoId);
    },
  },
  Comment: {
    writer({ kakaoId }) {
      return user.find((user) => user.kakaoId === kakaoId);
    },
  },
  Mutation: {
    postReview(root: any, { kakaoId, product_id, review }) {
      const newReview = {
        id: reviews.length + 1,
        kakaoId,
        product_id,
        review,
        date: `${year}.${month}.${day}`,
      };
      reviews.push(newReview);
      return newReview;
    },
    postComment(root: any, { kakaoId, contents_id, comment }) {
      const newComment = {
        id: comments.length + 1,
        kakaoId,
        contents_id,
        comment,
        date: `${year}.${month}.${day}`,
      };
      comments.push(newComment);
      return newComment;
    },
    deleteReview(root: any, { id }) {
      deleteItemId(id);
    },
    deleteComment(root: any, { id }) {
      deleteId(id);
    },
    addUser(root: any, { kakaoId, name }) {
      const findUser = user.find((ele) => ele.kakaoId === kakaoId);

      const newUser = {
        id: !findUser ? user.length + 1 : findUser.id,
        kakaoId,
        name,
      };
      aboutMe.push(newUser);
      if (!findUser) {
        user.push(newUser);
      }
      if (aboutMe.length > 1) {
        aboutMe = [];
        aboutMe.push(newUser);
      }
      return newUser;
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
