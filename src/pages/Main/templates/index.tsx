import React, { useState, useEffect, useRef } from "react";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import { CustomBtn, ProjectCard } from "@components/index";
import { profile } from "@static/index";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const MainTemplate = ({
  moveToAbout,
  moveToExp,
  moveToWork,
  moveToContact,
}: any) => {
  const classes = useStyles();
  const width = useWidth();
  const [showMore, setShowMore] = useState(false);

  console.log("width", width);

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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:c.henry.9209@gmail.com"
            >
              <CustomBtn>{"Get In Touch"}</CustomBtn>
            </a>
          </Grid>
        </section>

        <section ref={moveToAbout} id="about">
          <Grid className={classes.about} item xs={12}>
            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
              <h2 id="about_header">About, Me</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
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

        <section ref={moveToExp} id="work">
          <Grid className={classes.work} item xs={12}>
            <h2>Where I've Worked & Experienced</h2>
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

        <section ref={moveToWork} id="project">
          <div id="project_title">
            <h2>My Project</h2>
          </div>
          <ProjectCard showMore={showMore} />
          <div id="project_btn">
            <CustomBtn isClicked={handleClick}>Show More</CustomBtn>
          </div>
        </section>

        <Grid ref={moveToContact} className={classes.contact} item xs={12}>
          <section id="contact">
            <div id="contact_title">
              <h2>Get In Touch</h2>
            </div>
            <p id="contact_content">
              현재 구직 중에 있습니다. 언제든지 연락 주세요.
            </p>
          </section>
          <div id="contact_btn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:c.henry.9209@gmail.com"
            >
              <CustomBtn>Contact Me</CustomBtn>
            </a>
          </div>
        </Grid>

        <Grid className={classes.footer} item xs={12}>
          <div id="footer">Designed & Built by Chan Haeng Lee</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainTemplate;
