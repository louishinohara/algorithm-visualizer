import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Typist from "react-typist";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" style={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h2" style={{ fontWeight: "lighter", color: "white", marginTop: 20, letterSpacing:"7px"}}>
            Select Your Algorithm Type
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
