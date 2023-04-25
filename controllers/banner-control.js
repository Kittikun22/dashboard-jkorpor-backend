const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getBanner = (req, res) => {
    db.query("SELECT * FROM home_banner INNER JOIN images ON home_banner.image_id = images.image_id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const createBanner = (req, res) => {
    const banner_type = req.body.banner_type
    const image_id = req.body.image_id

    db.query("INSERT INTO home_banner (banner_type, image_id ) VALUES (?,?)",
        [banner_type, image_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const deleteBanner = (req, res) => {
    const banner_id = req.body.banner_id
    db.query("DELETE FROM home_banner WHERE banner_id=?",
        banner_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateBanner = (req, res) => {
    const banner_id = req.body.banner_id
    const banner_type = req.body.banner_type
    const image_id = req.body.image_id

    db.query("UPDATE home_banner SET banner_type = ? , image_id = ? WHERE banner_id = ?",
        [banner_type, image_id, banner_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    getBanner,
    createBanner,
    deleteBanner,
    updateBanner
}