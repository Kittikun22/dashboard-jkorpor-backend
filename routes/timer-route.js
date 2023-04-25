const express = require('express')

const {
    getTimer,
    updateTimer
} = require('../controllers/timer-control')

const timerRoute = express.Router()

timerRoute.get('/getTimer', getTimer)
timerRoute.put('/updateTimer', updateTimer)

module.exports = timerRoute