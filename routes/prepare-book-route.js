const express = require('express')
const multer = require('multer');

const {
    getPrepareBook,
    updatePreparebook,
    uploadPreparebook
} = require('../controllers/prepare-book-control')

const preparebookRoute = express.Router()

preparebookRoute.get('/getPrepareBook', getPrepareBook)
preparebookRoute.put('/updatePreparebook', updatePreparebook)
preparebookRoute.post('/uploadPreparebook',  uploadPreparebook)


module.exports = preparebookRoute