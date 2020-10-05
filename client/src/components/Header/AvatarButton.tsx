import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { LogoutButton } from "./LogoutButton";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    avatar: { cursor: "pointer" },
    link: {
      color: "#262626",
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

type TAvatarButton = {
  src: string;
};

export const AvatarButton = ({ src }: TAvatarButton) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick} className={classes.avatar}>
        <Avatar
          id="userAvatar"
          alt="Mekembe"
          src={src}
          className={classes.avatar}
        />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box p={1}>
          <MenuItem onClick={handleClose}>
            <Link
              component={RouterLink}
              to="/settings"
              className={classes.link}
            >
              Settings
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LogoutButton>Log out</LogoutButton>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};
