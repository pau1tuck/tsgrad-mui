import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import { theme } from "../styles/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "red",
    },
  })
);

function CustomCheckbox() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
      }}
    />
  );
}

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
