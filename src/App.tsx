import React, { useEffect, useState, createRef, useRef } from "react";
import { Main, NotFound, Loader } from "@pages/index";
import { CustomMenu, VerticalInfo } from "@components/index";
import { Route, Switch } from "react-router-dom";
import Headroom from "react-headroom";

function App() {
  const moveToAbout = useRef();
  const moveToExp = useRef();
  const moveToWork = useRef();
  const moveToContact = useRef();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <CustomMenu
            moveToAbout={moveToAbout}
            moveToExp={moveToExp}
            moveToWork={moveToWork}
            moveToContact={moveToContact}
          />
          <Main
            moveToAbout={moveToAbout}
            moveToExp={moveToExp}
            moveToWork={moveToWork}
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
