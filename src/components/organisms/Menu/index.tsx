//@ts-nocheck
import React, { useEffect, useState, createRef } from "react";
import { useStyles } from "@styles/index";
import { CustomBtn } from "@components/index";
import Headroom from "react-headroom";
import { useStore } from "@hooks/index";
import { observer } from "mobx-react-lite";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/icons/Menu";
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

const CustomMenu = observer(
  ({ moveToAbout, moveToExp, moveToWork, moveToContact }: any) => {
    const classes = useStyles();
    const { event } = useStore();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (e) => {
      setOpen(false);
    };

    const handleScroll = async (e: any) => {
      if (e.target.id == "about" && moveToAbout.current) {
        moveToAbout.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        await handleClose();
      } else if (e.target.id == "exp" && moveToExp.current) {
        moveToExp.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (e.target.id == "btn_project" && moveToWork.current) {
        moveToWork.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (e.target.id == "btn_contact" && moveToContact.current) {
        moveToContact.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    return (
      <section
        id="menuBar"
        // className={!event.isWelcomeClicked ? classes.menu : classes.none}
        className={classes.menu}
      >
        <Grid container>
          <Grid item xs={12}>
            <Hidden only={["xs", "sm"]}>
              <Headroom
                className="headroom"
                style={{
                  webkitTransition: "all .5s ease-in-out",
                  mozTransition: "all .5s ease-in-out",
                  oTransition: "all .5s ease-in-out",
                  transition: "all .5s ease-in-out",
                }}
              >
                <div className={"menu_btn_layout wide"}>
                  <button id="about" onClick={handleScroll}>
                    About
                  </button>
                  <button id="exp" onClick={handleScroll}>
                    Experience
                  </button>
                  <button id="btn_project" onClick={handleScroll}>
                    Project
                  </button>
                  <button id="btn_contact" onClick={handleScroll}>
                    Contact
                  </button>
                  <a href={pdf} target="_blank">
                    <CustomBtn
                      // id={
                      //   event.isWelcomeClicked
                      //     ? "hide_resume_btn"
                      //     : "resume_btn"
                      // }
                      id="resume_btn"
                      isClicked={handleClickOpen}
                    >
                      {"RESUME"}
                    </CustomBtn>
                  </a>
                </div>
              </Headroom>
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <Headroom
                className="headroom"
                style={{
                  webkitTransition: "all .5s ease-in-out",
                  mozTransition: "all .5s ease-in-out",
                  oTransition: "all .5s ease-in-out",
                  transition: "all .5s ease-in-out",
                }}
              >
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
                        <ListItem
                          className="list_style"
                          button
                          onClick={handleClose}
                        >
                          <a className="list_font" href="#about">
                            About
                          </a>
                        </ListItem>
                        <ListItem
                          className="list_style"
                          button
                          onClick={handleClose}
                        >
                          <a className="list_font" href="#work">
                            Experience
                          </a>
                        </ListItem>
                        <ListItem
                          className="list_style"
                          button
                          onClick={handleClose}
                        >
                          <a className="list_font" href="#project">
                            Project
                          </a>
                        </ListItem>
                        <ListItem
                          className="list_style"
                          button
                          onClick={handleClose}
                        >
                          <a className="list_font" href="#contact">
                            Contact
                          </a>
                        </ListItem>
                      </List>
                    </div>
                  </Dialog>
                </div>
              </Headroom>
            </Hidden>
          </Grid>
        </Grid>
      </section>
    );
  }
);

export default CustomMenu;
