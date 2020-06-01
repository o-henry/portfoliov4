import React from "react";
import { github, link, blog } from "@static/index";
import { useStyles } from "@styles/index";
import { useWidth } from "@hooks/index";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const projectList = [
  {
    name: "Papaya",
    description:
      "리액트 기반 반응형 SPA 로, Mapbox를 기반으로 한, 실내 측위 서비스 입니다. Apollo Subscription을 통한 실시간 위치 공유기능이 추가되었습니다.",
    stack: "React Mapbox Graphql AWS",
    git: "",
    youtube: "https://www.youtube.com/embed/s5gBXg1zrHY",
    blog: "https://o-henry.github.io/2020/05/10/maboxgljs/",
  },
  {
    name: "Crunch",
    description:
      "크런치 프라이스 기업과 협업한 프로젝트로, AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인 에게 맞는 상품 추천 시스템을 구현했습니다.",
    stack: "Python AWS Airflow",
  },
  {
    name: "LocalSNS",
    description:
      "인스타그램 장소, 날짜태그 데이터를 크롤링 및 가공 하여 사용하는 해시태그 데이터 기반 어플리케이션 개발중 입니다.",
    stack: "React Express Expo MongoDB Puppeteer",
  },
];

const ProjectCard = ({ showMore }: any) => {
  const classes = useStyles();
  const width = useWidth();
  const numberOfItems = showMore ? projectList.length : 3;

  return (
    <>
      <GridList cellHeight={150} className={classes.gridList}>
        {projectList.slice(0, numberOfItems).map((project) => {
          return (
            <GridListTile
              key={project.name}
              rows={width == "xs" ? 2.3 : 2.4}
              cols={
                width == "xs" ? 2 : width == "sm" || width == "md" ? 0.9 : 0.6
              }
            >
              <div className="projectcard_layout">
                <div className="projectcard_header">
                  <h3>{project.name}</h3>
                  <div className="projectcard_img_layout">
                    {project.git !== "" ? (
                      <div className="projectcard_img">
                        <img
                          className="stack_icon_style"
                          src={github}
                          alt="github"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    {project.youtube !== "" ? (
                      <div className="projectcard_img">
                        <a target="_blank" href={project.youtube}>
                          <img
                            className="stack_icon_style"
                            src={link}
                            alt="youtube"
                          />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                    {project.blog !== "" ? (
                      <div className="projectcard_img">
                        <a target="_blank" href={project.blog}>
                          <img
                            className="stack_icon_style"
                            src={blog}
                            alt="blog"
                          />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
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
