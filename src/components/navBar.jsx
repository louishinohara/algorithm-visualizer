
import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'




export default class NavigationBar extends React.Component {
    render(){
        return(
          <Navbar bg="dark" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Algorithm Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">

                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>

              </Nav>
              <Nav>
                <NavDropdown title="Visualize" id="collasible-nav-dropdown" >

                  <NavDropdown.Item href="#action/3.1">Sorting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Path Finding</NavDropdown.Item>
                  
                </NavDropdown>
                <Nav.Link href="#deets">More deets</Nav.Link>  
              </Nav>

            </Navbar.Collapse>
          </Navbar>

        );
    }
}
