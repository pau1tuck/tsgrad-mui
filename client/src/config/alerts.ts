import React from "react";
import { transitions, positions } from "react-alert";

export const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 2000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
