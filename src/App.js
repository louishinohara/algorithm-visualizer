import React, { Component } from "react";
// import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
// import NavigationBar from "./components/navBar";
// import SortingVisualizer from "./Visualizer/SortingVisualizer/SortingVisualizer";
import PathFindingVisualizer from "./Visualizer/PathFindingVisualizer/PathFindingVisualizer";
import ClippedDrawer from "./components/NavigationBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClippedDrawer />
        {/* <NavigationBar/> */}
        {/* <SortingVisualizer></SortingVisualizer> */}
        {/* <PathFindingVisualizer></PathFindingVisualizer> */}
      </div>
    );
  }
}

export default App;
