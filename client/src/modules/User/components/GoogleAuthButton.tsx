import React from "react";
import { useGoogleAuthMutation } from "../../../config/graphql";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../../config/socialAuth";
import { useAuthToken } from "../hooks/useAuthToken";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const GoogleAuthButton: React.FC = ({ children }) => {
  const [GoogleAuth, { error, data }] = useGoogleAuthMutation();
  const { setAuthCookie } = useAuthToken();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (data && data.socialAuth && data.socialAuth.token) {
      setIsLoading(false);
      setAuthCookie(data.socialAuth.token);
    }
  }, [data, setAuthCookie]);

  React.useEffect(() => {
    if (error) {
      console.log("Google authentication error: ", error);
      setIsLoading(false);
    }
  }, [error]);

  const handleSuccess = async (response: any) => {
    const { accessToken } = response;

    GoogleAuth({
      variables: {
        provider: "social_core.backends.google.GoogleOAuth2",
        accessToken,
      },
    });
  };

  const handleFailure = (response: any) => {
    console.log("Google authentication error: ", response);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      onRequest={() => setIsLoading(true)}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="outlined">
          {children}
        </Button>
      )}
    />
  );
};
