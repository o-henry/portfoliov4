import React from "react";
import { github } from "@static/index";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const projectList = [
  {
    name: "Papaya",
    description: "리액트 와 Mapbox를 기반으로 한, 실내 측위 서비스 SPA 입니다.",
    stack: "React Mapbox Graphql TS AWS",
  },
  {
    name: "Crunch",
    description:
      "크런치 프라이스 기업과 협업한 프로젝트로, AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인 에게 맞는 상품 추천 시스템을 구현했습니다.",
    stack: "Python, AWS, Airflow",
  },
  {
    name: "LocalSNS",
    description:
      "인스타그램 장소, 날짜태그 데이터를 크롤링 및 가공 하여 사용하는 해시태그 데이터 기반 어플리케이션 개발중 입니다.",
    stack: "React, Express, Expo, MongoDB, Puppeteer",
  },
];

const ProjectCard = () => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <>
      <GridList cellHeight={150} className={classes.gridList}>
        {projectList.map((project) => {
          return (
            <GridListTile
              rows={width == "xs" ? 1.8 : 3}
              cols={width == "xs" ? 2 : 0.6}
            >
              <div className="projectcard_layout">
                <div className="projectcard_header">
                  <h3>{project.name}</h3>
                  <img className="stack_icon_style" src={github} alt="github" />
                </div>
                <p className="projectcard_body_style">{project.description}</p>
                <p className="projectcard_body_stack">{project.stack}</p>
              </div>
            </GridListTile>
          );
        })}
      </GridList>
    </>
  );
};

export default ProjectCard;
