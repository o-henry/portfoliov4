import React, { createRef, useRef } from "react";
import { Main, NotFound } from "@pages/index";
import { CustomMenu } from "@components/index";
import { Route, Switch } from "react-router-dom";

function App() {
  const moveToAbout = useRef();
  const moveToExp = useRef();
  const moveToContact = useRef();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <CustomMenu
            moveToAbout={moveToAbout}
            moveToExp={moveToExp}
            moveToContact={moveToContact}
          />
          <Main
            moveToAbout={moveToAbout}
            moveToExp={moveToExp}
            moveToContact={moveToContact}
          />
        </Route>
        <Route path="">
          <NotFound header={"page not found"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
