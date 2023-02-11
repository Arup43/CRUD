import React, { useEffect } from 'react'
import { deleteBook, getAllBooks } from '../../apiServices/crudServices'
import { useState } from 'react';
import FullScreenLoader from '../common/FullScreenLoader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ListTable() {

  let [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => {
      setBooks(res);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  const deleteBookItem = (id) => {
    deleteBook(id).then(res => {
      if (res) {
        toast.success('Book deleted successfully');
        let newBooks = books.filter(book => book._id !== id);
        setBooks(newBooks);
      }
    }).catch(err => {
      toast.error('Book not deleted');
      console.log(err);
    })
  }

  const updateBookItem = (id) => {
    window.location.replace('/update/' + id);
  }

  if (books.length === 0) {
    return (
      <div className='container text-center'>
        <FullScreenLoader />
        <ToastContainer />
      </div>
    )
  } else {
    return (
      <div className='container'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Publisher</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map(book => {
                return <tr key={book._id}>
                  <td><img src={book.image} className='list-img' alt={book.title} /></td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>{book.publisher}</td>
                  <td>{book.price}</td>
                  <td>
                    <button onClick={deleteBookItem.bind(this, book._id)} className='btn btn-danger me-2'>Delete</button>
                    <button onClick={updateBookItem.bind(this, book._id)} className='btn btn-primary'>Update</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
        <ToastContainer />
      </div>
    )
  }
}
