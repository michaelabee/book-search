import React, {Component} from "react";
import Search from "../search/search";
// import Card from "../card/card";
import API from "../../api/api";
import "./results.css";

class Results extends Component {

  state ={
    books:{}
  }
  
  searchBooks(arg){
    console.log("searchBooks hit", arg);
    API.searchBooks(arg).then(function(results){
      console.log(results.data.items[0].volumeInfo.authors);
      console.log(results.data.items[0].volumeInfo.description);
      console.log(results.data.items[0].volumeInfo.imageLinks.smallThumbnail);
      this.setState({ books: results})
    })
    // .then((results) => {
    //   this.setState({ books: results })
    // });
    // console.log(books);
  }

  render(){
  return (
    <div id="results-container">
      <Search searchBooks={this.searchBooks}/>
      <h1>Search Results</h1>
      {/* {this.state.books.map(pic => (
          // <Card
          //   name={this.state.books.name}
          //   image={this.state.books.image}
          //   description={this.state.books.description}
          //   author={this.state.books.author}
          // />
        ))} */}
    </div>
  );
  }
}

export default Results;