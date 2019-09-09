import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Search from "./components/search/search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Banner/>
      <Search/>
      </div>
    );
  }
}

export default App;
