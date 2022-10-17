import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { comments } from "./db/comment.js";
import { contents } from "./db/contents.js";
import { item, getItemId } from "./db/Item.js";
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
    comments : Comment
  }
  type Comment {
    id : Int!
    contents_id : Int!
    writer : String!
    comment : String!
    date : String!
  }

  type Query {
    item: [Item]!
    contents : [Contents]!
    comments(id:Int!) : Comment
    selectItem(id:Int!) : Item
  }
`;
const resolvers = {
    Query: {
        item: () => item,
        contents: () => contents,
        comments: (root, { id }) => comments.find((comment) => comment.contents_id === id),
        selectItem: (root, { id }) => getItemId(id),
    },
    /* Mutation: {
      postContentsComment(root: any, { id, contents_id, writer, comment }) {
        const newComment = {
          id,
          contents_id,
          writer,
          comment,
          date: `${year}.${month}.${day}`,
        };
        comments.push(newComment);
        return newComment;
      },
    }, */
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
