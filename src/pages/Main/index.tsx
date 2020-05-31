import React from "react";
import { MainTemplate } from "@pages/index";

const Main = ({ moveToAbout, moveToExp, moveToContact }: any) => {
  return (
    <div>
      <MainTemplate
        moveToAbout={moveToAbout}
        moveToExp={moveToExp}
        moveToContact={moveToContact}
      />
    </div>
  );
};

export default Main;
