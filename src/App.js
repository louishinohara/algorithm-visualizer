import React, { Component, Fragment } from "react";
import PersistentDrawerLeft from "./components/Drawer";
import NavigationController from "./components/NavigationController";
import Header from "./components/Header/Header1";
import "./App.css";

import SortingVisualizer from "./Visualizer/SortingVisualizer/SortingVisualizer";
import PathfindingVisualizer from "./Visualizer/PathFindingVisualizer/PathFindingVisualizer";

import { BrowserRouter, Route, Router, Link, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <BrowserRouter>
            <PersistentDrawerLeft />
            <Switch>
              {/* <NavigationController /> */}
              <Route exact path="/" component={NavigationController} />
              <Route path="/sorting" component={SortingVisualizer} />
              <Route path="/pathfinding" component={PathfindingVisualizer} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      </div>
    );
  }
}
