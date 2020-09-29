import React from "react";
import { useApolloClient } from "@apollo/client";
import { Button } from "@material-ui/core";

export default function LogoutButton() {
  const client = useApolloClient();
  return (
    <Button
      onClick={() => {
        client.resetStore();
        localStorage.clear();
      }}
    >
      Log out
    </Button>
  );
}
