const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * export class Book {
  id: number;
  title: string;
  author: string;
  year: number;
  pages: number;
  publisher: string;
}

 */

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  pages: Number,
  year: Number,
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: {
    type: String,
    required: false,
    minlength: 3
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
