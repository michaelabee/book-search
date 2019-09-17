import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";

import Results from "./components/resultsContainer/results";
import Saved from "./components/savedContainer/saved"

import "./App.css";

class App extends Component {

  render() {
    return (
        <Router>
            <Navbar />
            <Banner/>
            <Switch>
              <Route exact path="/books" component={Saved} />
              <Route exact path="/search" component={Results} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
        </Router>
    );
  }
}

export default App;
