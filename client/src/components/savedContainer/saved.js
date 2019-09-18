import React from "react";
import Card from "../card/card";
import API from "../../utils/API";
import "./saved.css";

class Saved extends React.Component{

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

  render() {
    return (
      <div id="saved-container">
        <h1>Saved Books</h1>
        {/* <Card>
                    
        </Card> */}
      </div>
    );
  }
}

export default Saved;