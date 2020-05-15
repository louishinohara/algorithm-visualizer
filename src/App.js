import React, { Component } from "react";
import PersistentDrawerLeft from "./components/Drawer";
import NavigationController from "./components/NavigationController";
import Header from "./components/Header/Header1";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        <Header />

        <NavigationController />

        {/* <PathFindingVisualizer/>
        {/* <SortingVisualizer/> */}
      </div>
    );
  }
}
