import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={"header-title"}>
        <Typography> Pick A Sorting Algorithm </Typography>
      </div>
    );
  }
}
