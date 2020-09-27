import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Typography } from "@material-ui/core";

export const Footer: React.FC = () => {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          component={RouterLink}
          to="https://www.github.com/pau1tuck"
          color="inherit"
        >
          @pau1tuck
        </Link>
        &nbsp;
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
