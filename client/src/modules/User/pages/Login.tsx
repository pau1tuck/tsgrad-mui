import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { getAuthToken } from "../../../config/authToken";
import { useUserQuery } from "../../../config/graphql";
import { ROUTES } from "../../../config/routes.config";
import LoginForm from "../components/LoginForm";

export const Login: React.FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};
