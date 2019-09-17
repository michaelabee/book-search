const axios = require("axios");
var API_KEY = "AIzaSyAdCuZIysFDvikGCFn_KRWSGuqmTfvIOu4";
var searchTerm = "";

export default {
    searchBooks: function(arg) {
      console.log(searchTerm, "search term");
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=" + API_KEY);
    },
  };
