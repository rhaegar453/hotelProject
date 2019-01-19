import React from "react";
import { Navbar, NavItem } from "react-materialize";

const Navigation = props => {
  const clickedOnNavigation = e => {
    e.preventDefault();
    console.log("Clicked on navigation");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        Restaurant App
      </a>

      <div class="collapse navbar-collapse" id="navbarColor01" />
    </nav>
  );
};

export default Navigation;
