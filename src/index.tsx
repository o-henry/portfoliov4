import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import "./sass/main.scss";
import { Provider } from "mobx-react";
import { EventStore } from "@stores/index";
import * as serviceWorker from "./serviceWorker";

const event = new EventStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider event={event}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
