const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getSubjects = (req, res) => {
    db.query("SELECT * FROM subjects", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const getLastestSubjects = (req, res) => {
    db.query("SELECT * FROM subjects ORDER BY subject_id DESC LIMIT 10", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })

}

const createSubject = (req, res) => {
    const subject_id = req.body.subject_id
    const subject_name = req.body.subject_name

    db.query("INSERT INTO subjects (subject_id, subject_name) VALUES (?,?)",
        [subject_id, subject_name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const deleteSubject = (req, res) => {
    const subject_id = req.body.subject_id
    const subject_name = req.body.subject_name

    db.query("DELETE FROM subjects WHERE subject_id=? AND subject_name=?",
        [subject_id, subject_name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateSubject = (req, res) => {
    const subject_id = req.body.subject_id
    const subject_name = req.body.subject_name

    db.query("UPDATE subjects SET subject_name = ? WHERE subject_id = ?",
        [subject_name, subject_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}


module.exports = {
    getSubjects,
    getLastestSubjects,
    createSubject,
    deleteSubject,
    updateSubject
}