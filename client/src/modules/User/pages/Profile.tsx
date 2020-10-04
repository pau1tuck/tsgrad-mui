import React from "react";
import { useMeQuery } from "../../../config/graphql";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Page } from "../../../components/Page";

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    paper: {
      marginTop: spacing(4),
      padding: spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    light: {
      color: palette.secondary.dark,
    },
    label: {
      marginTop: spacing(3),
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const { loading, error, data } = useMeQuery();
  const userData = data?.me;

  if (loading) return null;
  if (error || !data) {
    return <div>Error...</div>;
  }
  return (
    <Page>
      <Container component="main" maxWidth="lg">
        <Paper elevation={6}>
          <Box p={4}>
            <Typography component="h1" variant="h4">
              Profile
            </Typography>
            <br />
            <Typography component="h3" variant="h6">
              Update your email address
            </Typography>
            <br />
            <Typography component="p" variant="body1">
              Your email is currently&nbsp;
              <span className={classes.light}>{userData?.email}.</span>
            </Typography>
            <form noValidate>
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                NEW EMAIL:
              </Typography>
              <TextField autoComplete="email" />
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                CURRENT PASSWORD:
              </Typography>
              <Input></Input>
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <br />
            <Divider />
            <br />
            <Typography component="h3" variant="h6">
              Change your password
            </Typography>
            <form noValidate>
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                CURRENT PASSWORD:
              </Typography>
              <TextField autoComplete="email" />
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                NEW PASSWORD:
              </Typography>
              <Input></Input>
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                CONFIRM NEW PASSWORD:
              </Typography>
              <Input></Input>
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <br />
            <Divider />
            <br />
            <Typography component="h3" variant="h6">
              Delete your account
            </Typography>
            <br />
            <Typography component="p" variant="body1">
              WARNING! This will permanently delete all of your data and cannot
              be undone.
            </Typography>
            <br />
            <Button type="submit" variant="contained" color="secondary">
              Delete account
            </Button>
            <br />
            <br />
          </Box>
        </Paper>
      </Container>
    </Page>
  );
};

export default Profile;
