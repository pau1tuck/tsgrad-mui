import React from "react";
import { makeVar } from "@apollo/client";
import { useSocialAuthMutation } from "../../../config/graphql";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FACEBOOK_APP_ID } from "../../../config/socialAuth";
import { useAuthToken } from "../hooks/useAuthToken";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const FacebookAuthButton: React.FC = ({ children }) => {
  const [socialAuth, { error, data }] = useSocialAuthMutation();
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
      console.log("Facebook authentication error: ", error);
      setIsLoading(false);
    }
  }, [error]);

  const handleResponse = async (response: any) => {
    console.log("Facebook authentication response: ", response);
    const { accessToken } = response;

    socialAuth({
      variables: {
        provider: "social_core.backends.facebook.FacebookOAuth2",
        accessToken,
      },
    });
  };

  const handleClick = (event: any, renderProps: any) => {
    event.preventDefault();
    renderProps.onClick(event);
    setIsLoading(true);
  };

  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      callback={handleResponse}
      render={(renderProps: any) => (
        <Button
          onClick={(event) => handleClick(event, renderProps)}
          variant="outlined"
          fullWidth
        >
          {children}
        </Button>
      )}
    />
  );
};
