import React, { Component } from "react";
import MediaCard from "./Card/Card";
import Grid from "@material-ui/core/Grid";
import sortingImg from "../images/Sorting.png";
import pathfindingimg from "../images/Pathfinding.png";



export default class NavigationController extends Component {
  render() {
    return (
      <div>
       {/* <Header /> */}
        <Grid container spacing={0}>
          <Grid md={6} alignItems="center" justify="center">
            <MediaCard title={"Sorting Algorithms"} image={sortingImg}/>
          </Grid>
          <Grid md={6} alignItems="center" justify="center">
            <MediaCard title={"Pathfinding Algorithms"} image={pathfindingimg}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// https://codepen.io/aholachek/pen/ERRpEj