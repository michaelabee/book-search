const axios = require("axios");
var API_KEY = "AIzaSyAdCuZIysFDvikGCFn_KRWSGuqmTfvIOu4";

export default {
    searchBooks: function(arg) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + arg + "&key=" + API_KEY)},
    
    getSavedBooks: function() {
      return axios.get("/api/books/");
    },
    // Deletes the saved book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves an book to the database
    saveBook: function(bookData) {
      return axios.post("api/books/", bookData);
    }
  };
  