import React, { Fragment, useEffect, useRef } from 'react'
import { isEmpty } from '../../helper/validation';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getBookById, updateBook } from '../../apiServices/crudServices';
import FullScreenLoader from '../common/FullScreenLoader';

export default function UpdateForm({ id }) {
  let title, author, description, image, publisher, price, loader = useRef();

  useEffect(() => {
    getBookById(id)
      .then(res => {
        if (res) {
          title.value = res.title;
          author.value = res.author;
          description.value = res.description;
          image.value = res.image;
          publisher.value = res.publisher;
          price.value = res.price;
        }
      }).catch(err => {
        console.log(err);
      })
  }, [title, author, description, image, publisher, price, loader, id])

  const updateData = () => {
    let book = {
      title: title.value,
      author: author.value,
      description: description.value,
      image: image.value,
      publisher: publisher.value,
      price: price.value
    }
    if (isEmpty(book.title)) {
      toast.error("Book title required")
    } else if (isEmpty(book.author)) {
      toast.error("Book author required")
    } else if (isEmpty(book.description)) {
      toast.error("Book description required")
    } else if (isEmpty(book.image)) {
      toast.error("Book image required")
    } else if (isEmpty(book.publisher)) {
      toast.error("Book publisher required")
    } else if (isEmpty(book.price)) {
      toast.error("Book price required")
    } else {
      loader.classList.remove('d-none');
      updateBook(id, book)
        .then(res => {
          if (res === true) {
            loader.classList.add('d-none');
            toast.success("Book updated successfully!");
            setTimeout(() => {
              window.location.replace('/');
            }, 2000);
          } else {
            toast.error("Book not updated!");
          }
        })
    }
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 p-2'>
            <label>Title</label>
            <input ref={input => { title = input }} type='text' className='form-control' />
          </div>
          <div className='col-md-4 p-2'>
            <label>Author</label>
            <input ref={input => author = input} type='text' className='form-control' />
          </div>
          <div className='col-md-4 p-2'>
            <label>Description</label>
            <input ref={input => description = input} type='text' className='form-control' />
          </div>
          <div className='col-md-4 p-2'>
            <label>Image</label>
            <input ref={input => image = input} type='text' className='form-control' />
          </div>
          <div className='col-md-4 p-2'>
            <label>Publisher</label>
            <input ref={input => publisher = input} type='text' className='form-control' />
          </div>
          <div className='col-md-4 p-2'>
            <label>Price</label>
            <input ref={input => price = input} type='text' className='form-control' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 p-2'>
          </div>
          <div className='col-md-4 p-2'>
            <button onClick={updateData} className='btn btn-primary w-100'>Update Book Info</button>
          </div>
        </div>
        <ToastContainer />
      </div>
      <div ref={(div) => loader = div} className='text-center d-none'>
        <FullScreenLoader />
      </div>
    </Fragment>
  )
}
