import React from "react";
import { ApolloProvider } from "./ApolloProvider";
import { ThemeProvider } from "./ThemeProvider";
import { AlertProvider } from "./AlertProvider";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AlertProvider>{children}</AlertProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};
