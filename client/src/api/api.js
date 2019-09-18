const axios = require("axios");
var API_KEY = "AIzaSyAdCuZIysFDvikGCFn_KRWSGuqmTfvIOu4";

export default {
    searchBooks: function(arg) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + arg + "&key=" + API_KEY);
    },
  };
