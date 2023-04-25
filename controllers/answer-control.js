const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getAnswers = (req, res) => {
    db.query("SELECT * FROM book_subject_topic_answers INNER JOIN books ON books.book_id = book_subject_topic_answers.book_id INNER JOIN subjects ON subjects.subject_id = book_subject_topic_answers.subject_id INNER JOIN topics ON topics.topic_id = book_subject_topic_answers.topic_id INNER JOIN book_types ON book_types.book_type_id = books.book_type_id",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
}

const createAnswer = (req, res) => {
    const book_id = req.body.book_id
    const subject_id = req.body.subject_id
    const topic_id = req.body.topic_id
    const answer_no = req.body.answer_no
    const answer_url = req.body.answer_url

    db.query("INSERT INTO book_subject_topic_answers (book_id, subject_id, topic_id, answer_no, answer_url) VALUES (?,?,?,?,?)",
        [book_id, subject_id, topic_id, answer_no, answer_url],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const deleteAnswer = (req, res) => {
    const answer_id = req.body.answer_id

    db.query("DELETE FROM book_subject_topic_answers WHERE answer_id = ?",
        answer_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateAnswer = (req, res) => {
    const answer_id = req.body.answer_id
    const answer_no = req.body.answer_no
    const answer_url = req.body.answer_url

    db.query("UPDATE book_subject_topic_answers SET answer_no = ? , answer_url = ? WHERE answer_id = ?",
        [answer_no, answer_url, answer_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    getAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
}