import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
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

  type Query {
    item: [Item]!
    selectItem(id:Int!) : Item
  }
`;
const resolvers = {
    Query: {
        item: () => item,
        selectItem: (root, { id }) => getItemId(id),
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
