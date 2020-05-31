import React from "react";
import { github } from "@static/index";

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
];

const ProjectCard = () => {
  return (
    <>
      {projectList.map((project) => {
        return (
          <div className="projectcard_layout">
            <div className="projectcard_header">
              <h3>{project.name}</h3>
              <img className="stack_icon_style" src={github} alt="github" />
            </div>
            <p className="projectcard_body_style">{project.description}</p>
            <p className="projectcard_body_stack">{project.stack}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
