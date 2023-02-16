import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { ProductsResolver } from "./graphql/products.js";
import { UserResolver } from "./graphql/User.js";
import { ShopLocationResolver } from "./graphql/shopLocation.js";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
buildSchema({
    resolvers: [ProductsResolver, UserResolver, ShopLocationResolver],
}).then((schema) => {
    const server = new ApolloServer({ schema });
    (async () => {
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀 Server listening at: ${url}`);
    })();
});
