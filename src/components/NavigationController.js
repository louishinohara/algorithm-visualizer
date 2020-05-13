import React, { Component } from "react";
import MediaCard from "./Card/Card";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";

export default class NavigationController extends Component {
  render() {
    return (
      <div>
       {/* <Header /> */}
        <Grid container spacing={0}>
         

          <Grid md={6} alignItems="center" justify="center">
            <MediaCard />
          </Grid>
          <Grid md={6} alignItems="center" justify="center">
            <MediaCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}
