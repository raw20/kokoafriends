import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:"http://3.39.166.0:4000/",
  cache: new InMemoryCache(),
});

export default client;
