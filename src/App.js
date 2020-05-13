import React, { Component } from "react";
import PersistentDrawerLeft from "./components/Drawer";
import Grid from "@material-ui/core/Grid";
import SortingVisualizer from "./Visualizer/SortingVisualizer/SortingVisualizer";
import PathFindingVisualizer from "./Visualizer/PathFindingVisualizer/PathFindingVisualizer";
import NavigationController from "./components/NavigationController";
import Header from './components/Header';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={0} alignItems="center" justify="center">

            <PersistentDrawerLeft />
            <Header />
          <Grid>
            <NavigationController />
          </Grid>
        </Grid>
      </div>
    );
  }
}

