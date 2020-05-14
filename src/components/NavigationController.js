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
        <Grid container spacing={0} direction="row" justify="center" style={{flexGrow: 1}}>
          <Grid item xs={12} md={6}>
            <MediaCard title={"Sorting Algorithms"} image={sortingImg}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <MediaCard title={"Pathfinding Algorithms"} image={pathfindingimg}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// https://codepen.io/aholachek/pen/ERRpEj