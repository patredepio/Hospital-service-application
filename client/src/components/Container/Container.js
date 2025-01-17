import React from "react";
import classes from "./Container.module.css";
const container = React.memo((props) => {
  return <div className={classes.container}>{props.children}</div>;
});
export default container;
