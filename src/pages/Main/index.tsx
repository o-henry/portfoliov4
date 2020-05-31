import React from "react";
import { MainTemplate } from "@pages/index";

const Main = ({ moveToAbout, moveToExp, moveToWork, moveToContact }: any) => {
  return (
    <div>
      <MainTemplate
        moveToAbout={moveToAbout}
        moveToExp={moveToExp}
        moveToWork={moveToWork}
        moveToContact={moveToContact}
      />
    </div>
  );
};

export default Main;
