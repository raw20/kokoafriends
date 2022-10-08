import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { contents } from "./db/contents.js";
import { item, getItemId } from "./db/Item.js";

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
    slideImg: [String]!
    mainTopImg:[String]!
    mainMidImg:[String]!
    mainBottomImg:[String]!
    
  }

  type Contents {
    id : Int!
    writer : String!
    image : String!
    title : String!
    content : String!
    date : String!
    like : Int!
  }

  type Query {
    item: [Item]!
    contents : [Contents]!
    selectItem(id:Int!) : Item
  }
`;

const resolvers = {
  Query: {
    item: () => item,
    contents: () => contents,
    selectItem: (root: any, { id }) => getItemId(id),
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
