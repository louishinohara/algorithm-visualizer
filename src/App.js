import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import NavigationBar from "./components/navBar";
import SortingVisualizer from "./Visualizer/SortingVisualizer/SortingVisualizer";
import './App.css';


class App extends Component{
  render() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
  }

}

export default App;
