import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://3.36.249.183:4000/",
  cache: new InMemoryCache(),
});

export default client;
