const express = require('express')

const {
    getNews,
    createNews,
    updateNews,
    deleteNews
} = require('../controllers/news-control')

const newsRoute = express.Router()

newsRoute.get('/getNews', getNews)
newsRoute.post('/createNews',createNews)
newsRoute.put('/updateNews',updateNews)
newsRoute.post('/deleteNews',deleteNews)

module.exports = newsRoute