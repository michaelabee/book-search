import React from "react";
import "./search.css";

function Search() {
  return (
    <div id="search-container">
      <h1>Book Search</h1>
      <form>
          <input 
          name="firstName"
          type="text"
          placeholder="Enter a Book Title"
          ></input>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default Search;
