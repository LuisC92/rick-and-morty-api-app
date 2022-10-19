import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      {/* <h1>NavBar</h1> */}
      <ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/characters-list">Characters List</Link>
        <br />
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
};

export default NavBar;
