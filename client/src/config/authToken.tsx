import Cookies from "js-cookie";

let authToken: any = "";

export const setAuthToken = (jwt: string) => {
  Cookies.set("jwttoken", jwt);
};

export const getAuthToken = () => {
  authToken = Cookies.get("jwttoken");
  console.log(authToken);
  return authToken;
};

export enum LOCAL_STORAGE_TEMPLATE {
  token = "x-token",
}
