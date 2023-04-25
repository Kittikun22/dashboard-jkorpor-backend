const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getPrepareBook = (req, res) => {
    db.query("SELECT * FROM home_preparebook INNER JOIN images ON home_preparebook.image_id = images.image_id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const uploadPreparebook = (req, res) => {
    res.status(200).send('File uploaded successfully')
}

const updatePreparebook = (req, res) => {
    const preparebook_id = req.body.preparebook_id
    const preparebook_name = req.body.preparebook_name
    const preparebook_des = req.body.preparebook_des
    const image_id = req.body.image_id
    const preparebook_fullprice = req.body.preparebook_fullprice
    const preparebook_amount = req.body.preparebook_amount
    const preparebook_url = req.body.preparebook_url


    db.query("UPDATE home_preparebook SET preparebook_name = ? , preparebook_des = ?, image_id = ? , preparebook_fullprice = ? , preparebook_amount = ? , preparebook_url = ? WHERE preparebook_id = ?",
        [preparebook_name, preparebook_des, image_id, preparebook_fullprice, preparebook_amount, preparebook_url, preparebook_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    getPrepareBook,
    updatePreparebook,
    uploadPreparebook
}