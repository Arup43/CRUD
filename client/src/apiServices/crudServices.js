import axios from "axios";

export function addBook(book) {
    let url = "/api/v1/addBook";
    const {title, author, description, image, publisher, price} = book;
    console.log(title, author, description, image, publisher, price);
    const postBody = {
        title,
        author,
        description,
        image,
        publisher,
        price
    }
    return axios.post(url, postBody).then(res => {
        if(res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}

export function getAllBooks() {
    let url = "/api/v1/getAllBooks";
    return axios.get(url).then(res => {
        if(res.status === 200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}

export function getBookById(id) {
    let url = "/api/v1/getBookById/" + id;
    return axios.get(url).then(res => {
        if(res.status === 200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}

export function updateBook(id, book) {
    let url = "/api/v1/updateBook/" + id;
    const {title, author, description, image, publisher, price} = book;
    const postBody = {
        title,
        author,
        description,
        image,
        publisher,
        price,
        updatedDate: Date.now()
    }
    return axios.put(url, postBody).then(res => {
        if(res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}

export function deleteBook(id) {
    let url = "/api/v1/deleteBook/" + id;
    return axios.delete(url).then(res => {
        if(res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}