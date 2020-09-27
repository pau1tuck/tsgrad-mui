import React from "react";
import { Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "../config/alerts";

export const AlertProvider: React.FC = ({ children }) => {
  return (
    <ReactAlertProvider template={AlertTemplate} {...options}>
      {children}
    </ReactAlertProvider>
  );
};
