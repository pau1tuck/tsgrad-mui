import React from "react";
import Cookie from "js-cookie";
import { useVerifyTokenMutation } from "../../../config/graphql";
import { LOCAL_STORAGE } from "../../../config/constants/variables";

const checkAuth = () => {
  const token = localStorage.getItem(LOCAL_STORAGE.token);
  const [verifyToken, { loading, error, data }] = useVerifyTokenMutation();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error...</div>;
  }

  console.log(data);
};
