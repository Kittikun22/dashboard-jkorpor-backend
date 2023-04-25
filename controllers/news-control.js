const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getNews = (req, res) => {
    db.query("SELECT * FROM news INNER JOIN images ON news.image_id = images.image_id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const createNews = (req, res) => {
    const news_topic = req.body.news_topic
    const news_des = req.body.news_des
    const image_id = req.body.image_id
    const news_content = req.body.news_content

    db.query("INSERT INTO news (news_topic, news_des, news_content, image_id) VALUES (?,?,?,?)",
        [news_topic, news_des, news_content, image_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateNews = (req, res) => {
    const news_id = req.body.news_id
    const news_topic = req.body.news_topic
    const news_des = req.body.news_des
    const news_content = req.body.news_content
    const image_id = req.body.image_id

    db.query("UPDATE news SET news_topic = ?, news_des = ?, news_content = ?, image_id = ? WHERE news_id = ?",
        [news_topic, news_des, news_content, image_id, news_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const deleteNews = (req, res) => {
    const news_id = req.body.news_id

    db.query("DELETE FROM news WHERE news_id= ?",
        news_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    getNews,
    createNews,
    updateNews,
    deleteNews
}