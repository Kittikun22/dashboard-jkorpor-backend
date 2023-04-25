const express = require('express')

const {
    getSubjects,
    getLastestSubjects,
    createSubject,
    deleteSubject,
    updateSubject
} = require('../controllers/subject-control')

const subjectRoute = express.Router()

subjectRoute.get('/getSubjects', getSubjects)
subjectRoute.get('/getLastestSubjects', getLastestSubjects)
subjectRoute.post('/createSubject', createSubject)
subjectRoute.post('/deleteSubject', deleteSubject)
subjectRoute.put('/updateSubject', updateSubject)

module.exports = subjectRoute