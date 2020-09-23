import { useApolloClient } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { LOCAL_STORAGE_TEMPLATE } from "../../../config/constants/enumerations";

const useAuthUser = () => {
  const client = useApolloClient();
  const history = useHistory();

  let authToken = "";

  const setAuthUser = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TEMPLATE.token, token);
  };

  const setAuthToken = (jwt: string) => {
    authToken = jwt;
    history.push(ROUTES.dashboard);
  };

  const getAuthToken = () => {
    return authToken;
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();
    history.push("/");
  };

  return { setAuthUser, setAuthToken, getAuthToken, logout };
};

export default useAuthUser;
