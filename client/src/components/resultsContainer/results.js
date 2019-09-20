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
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.searchBooks());
  };

  displayBooks = () => {
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
    const books = this.state.books.map(book => {
      return(
      <Card
      key={book.id}
      name={book.volumeInfo.title}
      author={book.volumeInfo.author}
      description={book.volumeInfo.description}
      image={book.volumeInfo.imageLinks.thumbnail}
      searchBooks={this.searchBooks}
      ></Card>
    )});
  return (
    
    <div id="results-container">
      <Search searchBooks={this.searchBooks}/>
      <h1>Search Results</h1>
      {books}
    </div>
  );
  }
}

export default Results;