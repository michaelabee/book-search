import React from "react";
import Card from "../card/card";
import API from "../../utils/API";
import "./saved.css";

class Saved extends React.Component {

  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  displayBooks = () => {
    if (this.state.books === undefined) {
      return null;
    }
    return this.state.books.map(book => (
      <Card
        key={book.volumeInfo.id}
        name={book.volumeInfo.title}
        author={book.volumeInfo.author}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        Button={() => (
          <button
            onClick={() => this.handleBookDelete(book._id)}>
            Delete</button>
        )}
      />
    ))
  }

  render() {
    const books = this.state.books.map(book => {
      return(
      <Card
      key={book.id}
      name={book.volumeInfo.title}
      author={book.volumeInfo.author}
      description={book.volumeInfo.description}
      image={book.volumeInfo.imageLinks.thumbnail}
      Button={() => (
        <button
          onClick={() => this.handleBookDelete(book.id)}
        >
          Delete
        </button>
      )}
      />
    )});
    return (
      <div id="saved-container">
        <h1>Saved Books</h1>
        {books}
      </div>
    );
  }
}

export default Saved;