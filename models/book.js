const mongoose = require("mongoose");
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds261486.mlab.com:61486/heroku_b2h240qr');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
