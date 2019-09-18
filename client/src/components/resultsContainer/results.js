import React, {Component} from "react";
import Search from "../search/search";
import Card from "../card/card";
import API from "../../api/api";
import "./results.css";

class Results extends Component {

  state ={
    books:[]
  }

  searchBooks = (arg) => {
    console.log("searchBooks hit", arg);
    API.searchBooks(arg)
    .then (results => {
      console.log(results.data.items, "results.data");
      this.setState({ books: results.data.items });
    })
    .catch (error => 
      console.log(error)
    )
  };

  displayBooks = () => {
    console.log(this.state.books, "BOOK DATA STATE");
    if(this.state.books === undefined){
      return null;
    }
    return this.state.books.map(book => (
      <Card>
      key={book.volumeInfo.id}
      name={book.volumeInfo.title}
      author={book.volumeInfo.author}
      description={book.volumeInfo.description}
      image={book.volumeInfo.imageLinks.thumbnail}
      </Card>
    ))
  }
  render(){
    console.log(this.state.books[0]);
    const books = this.state.books.map(book => {
      
      return(
      <Card
      key={book.id}
      name={book.volumeInfo.title}
      author={book.volumeInfo.author}
      description={book.volumeInfo.description}
      image={book.volumeInfo.imageLinks.thumbnail}
      />
    )});
  return (
    
    <div id="results-container">
      <Search searchBooks={this.searchBooks}/>
      <h1>Search Results</h1>
      
      {books}
      {/* {this.displayBooks()} */}
    </div>
  );
  }
}

export default Results;