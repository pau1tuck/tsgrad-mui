import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";

interface IMessageStyled {
  textAlign?: string;
  color?: string;
}

// const Message = styled(animated.p)<IMessageStyled>`
//   color: ${p => (p.color ? p.theme.colors[p.color] : p.theme.colors.primary)};
//   text-align: ${p => (p.textAlign ? `${p.textAlign}` : 'left')};
//   margin-top: 8px;
// `;

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    paper: {
      marginTop: spacing(4),
      padding: spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const Message: React.FC = ({ children, ...props }) => {
  const classes = useStyles();

  return <animated.p {...props}>{children}</animated.p>;
};

export default Message;
