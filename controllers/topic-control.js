const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getTopics = (req, res) => {

    db.query("SELECT * FROM topics", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const createTopic = (req, res) => {
    const topic_no = req.body.topic_no
    const topic_name = req.body.topic_name

    db.query("INSERT INTO topics (topic_no, topic_name) VALUES (?,?)",
        [topic_no, topic_name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}


const deleteTopic = (req, res) => {
    const topic_id = req.body.topic_id

    db.query("DELETE FROM topics WHERE topic_id = ?",
        topic_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateTopic = (req, res) => {
    const topic_id = req.body.topic_id
    const topic_no = req.body.topic_no
    const topic_name = req.body.topic_name


    db.query("UPDATE topics SET topic_no = ?, topic_name = ?  WHERE topic_id = ?",
        [topic_no, topic_name, topic_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}


module.exports = {
    getTopics,
    createTopic,
    deleteTopic,
    updateTopic
}