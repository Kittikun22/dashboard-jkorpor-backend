const mysql = require('mysql');
const fs = require('fs');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});


const uploadImage = (req, res) => {
    var host = req.headers.host;
    var protocol = req.protocol

    res.send({ message: 'upload successfully', image_src: protocol + '://' + host + '/' + req.file.path })
}

const createImage = (req, res) => {
    const image_src = req.body.image_src
    const image_alt = req.body.image_alt
    const image_type = req.body.image_type

    db.query("INSERT INTO images (image_src, image_alt, image_type) VALUES (?,?,?)",
        [image_src, image_alt, image_type],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateImage = (req, res) => {
    const image_id = req.body.image_id
    const image_src = req.body.image_src
    const image_alt = req.body.image_alt
    const image_type = req.body.image_type

    db.query("UPDATE images SET image_src = ?, image_alt = ?, image_type = ? WHERE image_id = ?",
        [image_src, image_alt, image_type, image_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })

}

const deleteImage = (req, res) => {
    const image_id = req.body.image_id
    const image_src = req.body.image_src

    let image_path = image_src.split('.com')

    db.query("DELETE FROM images WHERE image_id= ?",
        image_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                fs.unlink(image_path[1], (err => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send({ message: 'successfully' })
                    }
                }));
            }
        })
}

const getImages = (req, res) => {
    db.query("SELECT * FROM images", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

module.exports = {
    uploadImage,
    getImages,
    createImage,
    updateImage,
    deleteImage
}