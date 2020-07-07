import React, { Component, Fragment } from "react";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "./components/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Dashboard />
        </Fragment>
      </Provider>
    );
  }
}
