import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "@styles/index";

const CustomBtn = () => {
  const classes = useStyles();

  return (
    <div className={classes.btn}>
      <Button variant="contained">Default</Button>
    </div>
  );
};

export default CustomBtn;
