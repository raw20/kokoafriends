import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { bestItem, getBestitemId } from "./db/bestItem.js";

const typeDefs = `#graphql
  type BestItem {
    id: Int!
    name: String!
    title: String!
    bannerImg:String!
    contents:String!
    price: Int!
    like: Int!
    view: Int!
    comment: String!
    slideImg: [String]!
    mainTopImg:[String]!
    mainMidImg:[String]!
    mainBottomImg:[String]!
    
  }

  type Query {
    bestItem: [BestItem]!
    selectBestItem(id:Int!) : BestItem
  }
`;

const resolvers = {
  Query: {
    bestItem: () => bestItem,
    selectBestItem: (root: any, { id }) => getBestitemId(id),
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
