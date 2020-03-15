import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import "./NavbarComp.css";
import ClockComponent from "../../components/ClockComponent/ClockComponent";
// import ClockComponent from "./components/ClockComponent/ClockComponent";

const MainNavbar = props => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="main-navbar">
      <Navbar.Brand href="#/dashboard">HOA Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/signup">Signup</Nav.Link>
          <Nav.Link href="#/signup">Signup</Nav.Link>
        </Nav>
        <Nav className="navbar-right">
          <div className="greet-user">
            <ClockComponent name="Lior" />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
