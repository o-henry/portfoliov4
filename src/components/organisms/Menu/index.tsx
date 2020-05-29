import React from "react";
import { useStyles } from "@styles/index";
import { CustomBtn } from "@components/index";
import Grid from "@material-ui/core/Grid";

const CustomMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <Grid container>
        <Grid item xs={12}>
          <div className="menu_btn_layout">
            <div>About</div>
            <div>Experience</div>
            <div>Work</div>
            <div>Contact</div>
            <CustomBtn />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default CustomMenu;
