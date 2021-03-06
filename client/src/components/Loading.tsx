import React, { CSSProperties } from "react";

const container: CSSProperties = {
  marginTop: "100px",
  textAlign: "center",
};

export const Loading = () => {
  return (
    <div style={container}>
      <img src="/static/client/assets/images/tail-spinner.svg"></img>
    </div>
  );
};
