import React, { Component } from "react";
import Form from "./Form";
import Lead from "./Lead";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Form />
        <Lead />
      </div>
    );
  }
}
