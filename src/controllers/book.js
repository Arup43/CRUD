const Book = require('../models/Book');

//Add a new book
exports.addBook = (req, res) => {
    let reqBody = req.body;
    Book.create(reqBody, (err, data) => {
        if(err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    });
};

//Get all books
exports.getAllBooks = (req, res) => {
    Book.find({}, (err, data) => {
        if(err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    });
};

//Update a book
exports.updateBook = (req, res) => {
    const id = req.params.id;
    const query = {_id: id};
    const reqBody = req.body;
    Book.updateOne(query, reqBody, (err, data) => {
        if(err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
};

//Delete a book
exports.deleteBook = (req, res) => {
    const id = req.params.id;
    const query = {_id: id};
    Book.deleteOne(query, (err, data) => {
        if(err) {
            res.status(400).json({status: "failed", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
};