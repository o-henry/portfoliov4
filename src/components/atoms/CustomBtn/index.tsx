import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "@styles/index";
import { useStore } from "@hooks/index";
import { observer } from "mobx-react";

const CustomBtn = observer(({ id, isClicked, children }: any) => {
  const { event } = useStore();

  return (
    <Button
      id={id}
      onClick={isClicked ? isClicked : event.onClick}
      className="btn_default_style"
      variant="contained"
    >
      {children}
    </Button>
  );
});

export default CustomBtn;
