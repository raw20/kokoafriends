import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { ProductsResolver } from "./graphql/products.js";
import { UserResolver } from "./graphql/User.js";
import { GraphQLError } from "graphql";
import { getUser } from "./services/getUser.js";
import { generateUserModel } from "./services/auth.js";
import { UserAuthorizationResolver } from "./graphql/userAuthorization.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

buildSchema({
  resolvers: [ProductsResolver, UserResolver, UserAuthorizationResolver],
}).then((schema) => {
  const server = new ApolloServer({ schema });
  (async () => {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      /*  context: async ({ req, res }) => {
        const token = req.headers.authorization || "";

        const user = await getUser(token);

        if (!user)
          throw new GraphQLError("User is not authenticated", {
            extensions: {
              code: "UNAUTHENTICATED",
              http: { status: 401 },
            },
          });

        return {
          user,
          models: {
            User: generateUserModel({ req }),
          },
        };
      }, */
    });
    console.log(`🚀 Server listening at: ${url}`);
  })();
});
