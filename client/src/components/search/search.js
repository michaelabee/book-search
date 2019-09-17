import React from "react";
import "./search.css";

class Search extends React.Component{
  state = {
    searchTerm: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.searchBooks(this.state.searchTerm);
    this.setState({
      searchTerm: "",
    });
  };

  render() {
    return (
      <div className="search-container">
        <h1>Book Search</h1>
        <form className="form">
        <input 
          name="searchTerm"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Enter a Book Title"
          ></input>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
