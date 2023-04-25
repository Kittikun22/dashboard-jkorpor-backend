const express = require('express')

const {
    getTopics,
    createTopic,
    deleteTopic,
    updateTopic
} = require('../controllers/topic-control')

const topicRoute = express.Router()

topicRoute.get('/getTopics', getTopics)
topicRoute.post('/createTopic', createTopic)
topicRoute.post('/deleteTopic', deleteTopic)
topicRoute.put('/updateTopic', updateTopic)

module.exports = topicRoute