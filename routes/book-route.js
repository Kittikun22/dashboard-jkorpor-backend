const express = require('express')

const {
    createBook,
    getBooks,
    getBookTypes,
    deleteBook,
    updateBook,
    getLatestBooks,
    getBookColors,
    createBookColor,
    deleteBookColor,
    updateBookColor
} = require('../controllers/book-control')

const bookRoute = express.Router()

bookRoute.post('/createBook', createBook)
bookRoute.post('/deleteBook', deleteBook)
bookRoute.put('/updateBook', updateBook)
bookRoute.get('/getBooks', getBooks)
bookRoute.get('/getBookColors', getBookColors)
bookRoute.get('/getLatestBooks', getLatestBooks)
bookRoute.get('/getBookTypes', getBookTypes)
bookRoute.post('/createBookColor', createBookColor)
bookRoute.post('/deleteBookColor', deleteBookColor)
bookRoute.put('/updateBookColor', updateBookColor)


module.exports = bookRoute  