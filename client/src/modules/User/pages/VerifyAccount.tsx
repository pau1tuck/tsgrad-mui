import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useVerifyAccountMutation } from "../../../config/graphql";

export const VerifyAccount = () => {
  const { token } = useParams();
  const history = useHistory();

  const [VerifyAccount, { error }] = useVerifyAccountMutation();

  const verifyAccount = async (token: any) => {
    const response = await VerifyAccount({
      variables: token,
    });
    if (response && response.data) {
      response.data.verifyAccount?.success ? (
        history.push("/login")
      ) : (
        <div>Verification failed</div>
      );
    }
    <div>{error}</div>;
  };

  return <>{verifyAccount(token)}</>;
};
