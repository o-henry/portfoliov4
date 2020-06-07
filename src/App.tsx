import React, { useEffect, useState, useRef, Fragment } from "react";
import { Main, NotFound, Loader } from "@pages/index";
import { CustomMenu, VerticalInfo } from "@components/index";
import { Route, Switch } from "react-router-dom";
import { useStore } from "@hooks/index";
import { observer } from "mobx-react-lite";
import classNames from "classnames/bind";
import styles from "./sass/CSSModule.module.scss";

const App = observer(() => {
  const moveToAbout = useRef();
  const moveToExp = useRef();
  const moveToWork = useRef();
  const moveToContact = useRef();
  const { event } = useStore();
  const cx = classNames.bind(styles);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <div className={cx(event.isWelcomeClicked ? "have-fun" : "default")}>
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
    </div>
  );
});

export default App;
