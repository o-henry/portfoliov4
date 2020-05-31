import React from "react";
import { MainTemplate } from "@pages/index";

const Main = ({ moveToAbout }: any) => {
  return (
    <div>
      <MainTemplate moveToAbout={moveToAbout} />
    </div>
  );
};

export default Main;
