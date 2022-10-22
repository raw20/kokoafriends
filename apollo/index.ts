import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { comments } from "./db/comment.js";
import { contents, getContentsId } from "./db/contents.js";
import { item, getItemId } from "./db/Item.js";
import { user } from "./db/user.js";

let aboutMe = [];

const typeDefs = `#graphql
  type Item {
    id: Int!
    name: String!
    title: String!
    contents:String!
    price: Int!
    like: Int!
    view: Int!
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
    selectItem(id:Int!) : Item
    allUser:[User]!
    aboutMe:[User]!
  }
  type Mutation {
    postContentsComment(kakaoId:String!,contents_id:Int!,comment:String!) : Comment
    deleteContentsComment(kakaoId:String!) : Boolean!
    addUser(kakaoId:String!,name:String!): User
  }
`;

const resolvers = {
  Query: {
    item: () => item,
    contents: () => contents,
    selectContents: (root: any, { id }) => getContentsId(id),

    comments: (root: any, { id }) =>
      comments.filter((comment) => comment.contents_id === id),
    selectItem: (root: any, { id }) => getItemId(id),
    allUser: () => user,
    aboutMe: () => aboutMe,
  },
  Contents: {
    comments({ id }) {
      return comments.filter((comments) => comments.contents_id === id);
    },
  },
  Comment: {
    writer({ kakaoId }) {
      return user.find((user) => user.kakaoId === kakaoId);
    },
  },
  Mutation: {
    postContentsComment(root: any, { kakaoId, contents_id, comment }) {
      const writeComment = new Date();
      const year = writeComment.getFullYear();
      const month = writeComment.getMonth() + 1;
      const day = writeComment.getDate();
      const newComment = {
        id: comment.length + 1,
        kakaoId,
        contents_id,
        comment,
        date: `${year}.${month}.${day}`,
      };
      comments.push(newComment);
      return newComment;
    },

    deleteContentsComment(root: any, { kakaoId }) {
      const comment = comments.find((comment) => comment.kakaoId === kakaoId);
      if (!comment) return false;
      comments.filter((comment) => comment.kakaoId !== kakaoId);
      return true;
    },
    addUser(root: any, { kakaoId, name }) {
      const newUser = {
        id: user.length + 1,
        kakaoId,
        name,
      };
      const findId = user.find((ele) => ele.kakaoId === kakaoId);
      if (!findId) {
        user.push(newUser);
      }
      aboutMe.push(newUser);
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
