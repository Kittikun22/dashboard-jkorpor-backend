const express = require('express')

const {
    getAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
} = require('../controllers/answer-control')

const answerRoute = express.Router()

answerRoute.get('/getAnswers', getAnswers)
answerRoute.post('/createAnswer', createAnswer)
answerRoute.post('/deleteAnswer', deleteAnswer)
answerRoute.put('/updateAnswer', updateAnswer)


module.exports = answerRoute