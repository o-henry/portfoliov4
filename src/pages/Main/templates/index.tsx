import React, { useState } from "react";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import { CustomBtn, ProjectCard } from "@components/index";
import { profile } from "@static/index";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Hidden from "@material-ui/core/Hidden";

const MainTemplate = () => {
  const classes = useStyles();
  const width = useWidth();
  const [showMore, setShowMore] = useState(false);

  console.log(width);

  const handleClick = () => {
    setShowMore(true);
  };

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
          <Grid className={classes.intro} item xs={12}>
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
          <Grid className={classes.about} item xs={12}>
            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
              <h2>About, Me</h2>
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
            <Hidden only={["xs"]}>
              <Grid item xs={6}>
                <img
                  id="profile_img_position"
                  src={profile}
                  alt="profile_img"
                />
              </Grid>
            </Hidden>
          </Grid>
        </section>
        <section id="work">
          <Grid className={classes.work} item xs={12}>
            <h2>Where I've Worked</h2>
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
          </Grid>
        </section>
        <section id="project">
          <Grid className={classes.project}>
            <h2>My Project</h2>
            <GridList
              cellHeight={width == "sm" || width == "md" ? 155 : 230}
              className={classes.gridList}
            >
              <Grid item md={6} lg={4} xl={4} sm={6} xs={12}>
                <ProjectCard />
              </Grid>
              {/* <Grid item md={6} lg={4} xl={4} sm={6} xs={12}>
                <ProjectCard />
              </Grid>
              <Grid item md={6} lg={4} xl={4} sm={6} xs={12}>
                <ProjectCard />
              </Grid> */}
            </GridList>
            <CustomBtn isClicked={handleClick}>버튼</CustomBtn>
          </Grid>
        </section>
      </Grid>
    </div>
  );
};

export default MainTemplate;
