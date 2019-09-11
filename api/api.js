const axios = require("axios");

var API_KEY = AIzaSyAdCuZIysFDvikGCFn_KRWSGuqmTfvIOu4;
var query = "";

export default {
    searchBooks: function() {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + API_KEY);
    },
  };