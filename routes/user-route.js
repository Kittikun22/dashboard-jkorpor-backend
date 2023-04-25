const express = require('express')

const {
    Signin,
    createUser,
    authToken
} = require('../controllers/user-control')

const userRoute = express.Router()

userRoute.post('/signin', Signin)
userRoute.post('/createUser', createUser)
userRoute.post('/authToken', authToken)

module.exports = userRoute