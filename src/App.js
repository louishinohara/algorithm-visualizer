import React, { Component } from "react";
import PersistentDrawerLeft from "./components/NavigationBar";

import SortingVisualizer from "./Visualizer/SortingVisualizer/SortingVisualizer";
import PathFindingVisualizer from "./Visualizer/PathFindingVisualizer/PathFindingVisualizer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        {/* <SortingVisualizer></SortingVisualizer> */}
        {/* <PathFindingVisualizer></PathFindingVisualizer> */}
      </div>
    );
  }
}

export default App;
