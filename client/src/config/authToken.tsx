let authToken = "";

export const setAuthToken = (jwt: string) => {
  authToken = jwt;
};

export const getAuthToken = () => {
  return authToken;
};
