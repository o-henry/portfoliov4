import React from "react";
import { MainTemplate } from "@pages/index";
import { projectList } from "@config/index";

const Main = ({ moveToAbout, moveToExp, moveToWork, moveToContact }: any) => {
  return (
    <div>
      <MainTemplate
        moveToAbout={moveToAbout}
        moveToExp={moveToExp}
        moveToWork={moveToWork}
        moveToContact={moveToContact}
        projectList={projectList}
      />
    </div>
  );
};

export default Main;
