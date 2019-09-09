import React from "react";
import "./navbar.css";

function Navbar (){
  return (
    <nav className="navbar">
      <ul>
        <li id="title">
          <p>Google Book Search</p>
        </li>
        <li class="item">
          <a>Search</a>
        </li>
        <li>
          <a class="item">Saved Books</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
