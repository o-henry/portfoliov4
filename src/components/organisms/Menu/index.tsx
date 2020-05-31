//@ts-nocheck
import React, { useState, createRef } from "react";
import { useStyles } from "@styles/index";
import { CustomBtn } from "@components/index";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/icons/Menu";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { TransitionProps } from "@material-ui/core/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const pdf = require("../../../ChanHaengLee.pdf");

const CustomMenu = ({ moveToAbout }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleScroll = (e: any) => {
    if (moveToAbout.current) {
      moveToAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="menuBar" className={classes.menu}>
      <Grid container>
        <Grid item xs={12}>
          <Hidden only={["xs", "sm"]}>
            <div className="menu_btn_layout wide">
              <button onClick={handleScroll}>About</button>
              <div>Experience</div>
              <div>Work</div>
              <div>Contact</div>
              <a href={pdf} target="_blank">
                <CustomBtn>{"RESUME"}</CustomBtn>
              </a>
            </div>
          </Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            <div className="menu_btn_layout small">
              <CustomBtn id="small_drawer" isClicked={handleClickOpen}>
                <Menu id="menu_icon_size" />
              </CustomBtn>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>

                <div className="menu_list_layout">
                  <List>
                    <ListItem button>
                      <ListItemText
                        className="listItem_position"
                        primary="About"
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        className="listItem_position"
                        primary="Experience"
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        className="listItem_position"
                        primary="Work"
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        className="listItem_position"
                        primary="Contact"
                      />
                    </ListItem>
                  </List>
                </div>
              </Dialog>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </section>
  );
};
export default CustomMenu;
