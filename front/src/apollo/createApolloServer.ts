import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { MainItemResolver } from "./graphql/item";

async function createApolloServer(port: number) {
  const app = express();
  const schema = await buildSchema({ resolvers: [MainItemResolver] });
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => app.listen(port, resolve));
  console.log("port : ", port);

  return { server, app };
}
