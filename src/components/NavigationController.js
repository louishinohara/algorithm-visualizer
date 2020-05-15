import React, { Component } from "react";
import MediaCard from "./Card/Card";
import { Grid, Button } from "@material-ui/core";
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
    const selectSorting = () => {
      console.log("a");
    };

    const selectPathFinding = () => {
      console.log("a");
    };
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
            <Button onClick={selectSorting}>
              <MediaCard
                title={"Sorting Algorithms"}
                description={
                  "Insertion · Selection · Merge · Quick · Heap · Bubble · Radix "
                }
                image={sortingImg}
              />
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button onClick={selectPathFinding}>
              <MediaCard
                title={"Pathfinding Algorithms"}
                description={
                  "Dijkstra · A-star · Depth First Search · Bredth First Search · Best-First-Search"
                }
                image={pathfindingimg}
              />
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// https://codepen.io/aholachek/pen/ERRpEj
