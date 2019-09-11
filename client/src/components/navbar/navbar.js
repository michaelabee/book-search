import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css";

function Navbar (){
  return (
    <nav className="navbar">
      <ul>
        <li id="title">
          <p>Google Book Search</p>
        </li>
        <li className="item">
          <Link to={"/search"}>Search</Link>
        </li>
        <li>
        <Link to={"/"}>Saved Books</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
