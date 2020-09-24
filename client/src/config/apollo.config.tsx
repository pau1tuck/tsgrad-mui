import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  credentials: "include",
  headers: {
    authorization: localStorage.getItem("x-token") || "",
    "client-name": "tsgrad-mui",
    "client-version": "1.0.0",
  },
  cache,
});

export { client };
