import React from "react";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";

const MainTemplate = () => {
  const classes = useStyles();
  const width = useWidth();

  return <div className={classes.rootLg}>main</div>;
};

export default MainTemplate;
