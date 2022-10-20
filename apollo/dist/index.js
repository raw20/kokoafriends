import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { content, getContent } from "./db/contents.js";
import { getDbShop } from "./db/Item.js";
const typeDefs = `#graphql
  type Item {
    sId: Int!
    sName: String!
    sPrice: Int!
    sLike: Int!
    sView: Int!
    sCategory:String!
    sImage: String!
  }

  type Contents {
    cId : Int!
    cWriter : String!
    cProfileImg : String!
    cImage : String!
    cTitle : String!
    cContent : String!
    cDate : String!
    cLike : Int!
  }

  type Query {
    item: [Item]
    getDbShop: [Item]
    getContent : [Contents]!
    contents : [Contents]!
    selectItem(id:Int!) : Item
  }
  type Mutation{
      addContent( cId : Int!, cWriter : String!, cProfileImg : String!, cImage : String!
      ,cTitle : String!
      ,cContent : String!
      ,cDate : String!
      ,cLike : Int!) :Boolean
    }
`;
const resolvers = {
    Query: {
        getDbShop: () => getDbShop(),
        getContent: () => getContent(),
        contents: async (cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike) => {
            const result = await content.selectAll(cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike);
            return result;
        },
    },
    Mutation: {
        addContent: async (_, { cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike }) => {
            const result = await content.insert(cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike);
            return result.code;
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
