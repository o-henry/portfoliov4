import React from "react";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import { CustomBtn } from "@components/index";
import { profile } from "@static/index";
import Grid from "@material-ui/core/Grid";

const MainTemplate = () => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <div
      className={
        width == "sm"
          ? classes.rootSm
          : width == "xs"
          ? classes.rootXs
          : classes.rootLg
      }
    >
      <Grid container>
        <section id="intro">
          <Grid className={classes.mainIntro} item xs={12}>
            <h1>Hi, I'm Chan Haeng Lee.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <CustomBtn>{"Get In Touch"}</CustomBtn>
          </Grid>
        </section>
        <section id="about">
          <Grid className={classes.mainAbout} item xs={12}>
            <Grid item xs={9}>
              <h2>About Me</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Grid>
            <div className="about_verticalline"></div>
            <Grid item xs={3}>
              <img id="profile_img_position" src={profile} alt="profile_img" />
            </Grid>
          </Grid>
        </section>
      </Grid>
    </div>
  );
};

export default MainTemplate;
