import React from "react";
import { ApolloProvider } from "./ApolloProvider";

export const AppProvider: React.FC = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
