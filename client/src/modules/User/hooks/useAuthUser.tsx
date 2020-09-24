import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../config/routes.config";
import { LOCAL_STORAGE_TEMPLATE } from "../../../config/constants/enumerations";

const useAuthUser = () => {
  const client = useApolloClient();
  const history = useHistory();

  const setAuthUser = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TEMPLATE.token, token);
    history.push(ROUTES.dashboard);
  };

  const setAuthCookie = (token: string) => {
    Cookie.set("jwttoken", token);
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();
    history.push("/");
  };

  return { setAuthUser, setAuthCookie, logout };
};

export default useAuthUser;
