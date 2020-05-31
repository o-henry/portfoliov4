import React, { createRef, useRef } from "react";
import { Main, NotFound } from "@pages/index";
import { CustomMenu } from "@components/index";
import { Route, Switch } from "react-router-dom";

function App() {
  const moveToAbout = useRef();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <CustomMenu moveToAbout={moveToAbout} />
          <Main moveToAbout={moveToAbout} />
        </Route>
        <Route path="">
          <NotFound header={"page not found"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
