import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { comments } from "./db/comment.js";
import { contents, getContentsId } from "./db/contents.js";
import { item, getItemId } from "./db/Item.js";
import { user } from "./db/user.js";
const writeComment = new Date();
const year = writeComment.getFullYear();
const month = writeComment.getMonth() + 1;
const day = writeComment.getDate();
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
    user_id : Int
    writer : User
    comment : String!
    date : String!
  }
  type User{
    id: Int
    name: String
  }
  type Query {
    item: [Item]!
    contents : [Contents]
    selectContents (id:Int!) : Contents
    comments(id:Int!) : [Comment]
    selectItem(id:Int!) : Item
  }
  type Mutation {
    postContentsComment(user_id:Int!,contents_id:Int!,comment:String!) : [Comment]
  }
`;
const resolvers = {
    Query: {
        item: () => item,
        contents: () => contents,
        selectContents: (root, { id }) => getContentsId(id),
        comments: (root, { id }) => comments.filter((comment) => comment.contents_id === id),
        selectItem: (root, { id }) => getItemId(id),
    },
    Contents: {
        comments({ id }) {
            return comments.filter((comments) => comments.contents_id === id);
        },
    },
    Comment: {
        writer({ user_id }) {
            return user.find((user) => user.id === user_id);
        },
    },
    Mutation: {
        postContentsComment(root, { user_id, contents_id, comment }) {
            const newComment = {
                id: comment.length + 1,
                user_id,
                contents_id,
                comment,
                date: `${year}.${month}.${day}`,
            };
            comments.push(newComment);
            return newComment;
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
