const express = require('express');
const {addBook, getAllBooks, updateBook, deleteBook} = require('../controllers/book');

const router = express.Router();

//Add a new book
router.post('/addBook', addBook);

//Get all books
router.get('/getAllBooks', getAllBooks);

//Update a book
router.put('/updateBook/:id', updateBook);

//Delete a book
router.delete('/deleteBook/:id', deleteBook);


module.exports=router;