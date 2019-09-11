import React, {Component} from "react";
import Search from "../search/search";
import Card from "../card/card";
import API from "../../api/api";
import "./results.css";

class Results extends Component {
  
  componentDidMount(){
    API.searchBooks().then(function(results){
      console.log(results.data.items);
    });
  };

  render(){
  return (
    <div id="results-container">
      <Search/>
      <h1>Search Results</h1>
      {/* <Card/> */}
    </div>
  );
  }
}

export default Results;