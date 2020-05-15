import React, { Component } from "react";
import MediaCard from "./Card/Card";
import {Grid, Button} from "@material-ui/core";
import sortingImg from "../images/Sorting.png";
import pathfindingimg from "../images/Pathfinding.png";

export default class NavigationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          style={{ flexGrow: 1 }}
        >
          <Grid item xs={12} md={6}>
            <MediaCard
              title={"Sorting Algorithms"}
              description={
                "Insertion · Selection · Merge · Quick · Heap · Bubble · Radix "
              }
              image={sortingImg}
            />
          </Grid>
          <Grid item xs={12} md={6}>
          
          
            <MediaCard
              title={"Pathfinding Algorithms"}
              description={
                "Dijkstra · A-star · Depth First Search · Bredth First Search"
              }
              image={pathfindingimg}
            />
           
          </Grid>
        </Grid>
      </div>
    );
  }
}

// https://codepen.io/aholachek/pen/ERRpEj
