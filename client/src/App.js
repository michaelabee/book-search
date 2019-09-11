import React, { Component } from "react";
import API from "../api/api";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Search from "./components/search/search";
import Results from "./components/resultsContainer/results";
import Saved from "./components/savedContainer/saved"
import Card from "./components/card/card"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Banner/>
      </div>
    );
  }
}

export default App;
