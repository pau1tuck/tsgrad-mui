import React from "react";
import { ApolloProvider as ReactApolloProvider } from "@apollo/client";
import { client } from "../config/apollo.config";

export const ApolloProvider: React.FC = ({ children }) => {
  return <ReactApolloProvider client={client}>{children}</ReactApolloProvider>;
};
