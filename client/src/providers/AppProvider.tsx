import React from "react";
import { ApolloProvider } from "./ApolloProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApolloProvider>
  );
};
