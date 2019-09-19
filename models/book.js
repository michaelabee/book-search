const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description:{ type: String, require:true},
  image: { type: String, require:true },
  id:{type:String, required:true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
