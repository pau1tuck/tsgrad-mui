import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, IconButton } from "@material-ui/core";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    avatar: { cursor: "pointer" },
  })
);

type TAvatarButton = {
  src: string;
};

export const AvatarButton = ({ src }: TAvatarButton) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.avatar}>
      <Avatar
        id="userAvatar"
        alt="Mekembe"
        src={src}
        className={classes.avatar}
      />
    </IconButton>
  );
};
