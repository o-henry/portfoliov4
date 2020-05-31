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
        <Grid className={classes.intro} item xs={12}>
          <section id="intro">
            <h1 className="portfolio_header">Hi, I'm Chan Haeng Lee.</h1>
            <p className="portfolio_content">
              I'm a junior developer who loves collaboration and communication.{" "}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:c.henry.9209@gmail.com"
            >
              <CustomBtn>{"Get In Touch"}</CustomBtn>
            </a>
          </section>
        </Grid>

        <section ref={moveToAbout} id="about">
          <Grid className={classes.about} item xs={12}>
            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
              <h2>About, Me</h2>
              <p className="portfolio_content">
                안녕하세요, 저는 이찬행 이라고 합니다. <br /> 부트캠프 과정을
                통해 자바스크립트를 기본으로 하여 웹 전반에 대한 개발을
                배웠습니다. 하드 스킬 뿐만 아니라, 협업을 통해 커뮤니케이션과
                유연성등 의 소프트 스킬 또한 함양하였습니다. 애자일 & 스크럼
                방식을 채택하여 프로젝트를 관리 및 진행하였습니다.
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
            {/* <ul>
              <li> Code States</li>
            </ul> */}
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
          <div id="footer">Built by Chan Haeng Lee</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainTemplate;
