import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "@styles/index";

const CustomBtn = ({ id, isClicked, children }: any) => {
  // console.log(event);
  return (
    <Button
      id={id}
      onClick={isClicked}
      className="btn_default_style"
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
