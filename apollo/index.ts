import "reflect-metadata";
import * as joiful from "joiful";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { ProductsResolver } from "./graphql/products.js";
import { UserResolver } from "./graphql/user.js";
import { ReviewsResolver } from "./graphql/reviews.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

buildSchema({
  resolvers: [ProductsResolver, UserResolver, ReviewsResolver],
  validate: (argValue) => {
    const { error } = joiful.validate(argValue);
    if (error) {
      throw error;
    }
  },
}).then((schema) => {
  const server = new ApolloServer({ schema });
  (async () => {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀 Server listening at: ${url}`);
  })();
});
