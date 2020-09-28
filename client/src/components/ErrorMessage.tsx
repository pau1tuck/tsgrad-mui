import React, { useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

interface iErrorMessage {
  errors: any;
  type: string;
}

export const ErrorMessage = ({ errors, type }: iErrorMessage) => {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (errors[type]) {
      setOpen(true);
    }
  });
  useEffect(() => {
    if (!errors[type]) {
      setOpen(false);
    }
  });
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (!errors[type]) return null;

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {errors[type].message}
      </Alert>
    </Snackbar>
  );
};
