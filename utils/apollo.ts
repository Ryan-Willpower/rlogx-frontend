import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloServer = new ApolloClient({
  uri: process.env.STRAPI_API || "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
