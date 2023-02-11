const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    published_date: {type: Date, default: Date.now()},
    publisher: {type: String, required: true},
    updated_date: {type: Date, default: Date.now()},
    price: {type: Number, required: true},
}, {versionKey: false});

const Book = mongoose.model('books', Schema);
module.exports = Book;