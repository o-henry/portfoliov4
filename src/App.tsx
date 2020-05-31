import React from "react";
import { Main, NotFound } from "@pages/index";
import { CustomMenu } from "@components/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <CustomMenu />
          <Main />
        </Route>
        <Route path="">
          <NotFound header={"page not found"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
