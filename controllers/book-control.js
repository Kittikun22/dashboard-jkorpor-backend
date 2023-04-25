const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getBooks = (req, res) => {
    db.query("SELECT * FROM books INNER JOIN book_types ON books.book_type_id = book_types.book_type_id INNER JOIN book_color ON books.book_color_id = book_color.book_color_id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const getLatestBooks = (req, res) => {
    db.query("SELECT * FROM books ORDER BY book_id DESC LIMIT 10", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}


const createBook = (req, res) => {
    const book_name = req.body.book_name
    const year = req.body.year
    const edition = req.body.edition
    const book_type_id = req.body.book_type_id
    const book_color_id = req.body.book_color_id

    db.query("INSERT INTO books (book_name, year, edition, book_type_id, book_color_id) VALUES (?,?,?,?,?)",
        [book_name, year, edition, book_type_id, book_color_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const getBookTypes = (req, res) => {
    db.query("SELECT * FROM book_types", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const deleteBook = (req, res) => {
    const book_id = req.body.book_id
    db.query("DELETE FROM books WHERE book_id=?",
        book_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateBook = (req, res) => {
    const book_id = req.body.book_id
    const book_name = req.body.book_name
    const year = req.body.year
    const edition = req.body.edition
    const book_type_id = req.body.book_type_id
    const book_color_id = req.body.book_color_id

    db.query("UPDATE books SET book_name = ? , year = ?, edition = ?, book_type_id = ?, book_color_id = ? WHERE book_id = ?",
        [book_name, year, edition, book_type_id, book_color_id, book_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const getBookColors = (req, res) => {
    db.query("SELECT * FROM book_color", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const createBookColor = (req, res) => {
    const book_color_name = req.body.book_color_name
    const book_color_code = req.body.book_color_code

    db.query("INSERT INTO book_color (book_color_name, book_color_code) VALUES (?,?)",
        [book_color_name, book_color_code],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })

}

const deleteBookColor = (req, res) => {
    const book_color_id = req.body.book_color_id

    db.query("DELETE FROM book_color WHERE book_color_id = ?",
        book_color_id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

const updateBookColor = (req, res) => {
    const book_color_id = req.body.book_color_id
    const book_color_name = req.body.book_color_name
    const book_color_code = req.body.book_color_code

    db.query("UPDATE book_color SET book_color_name = ?, book_color_code =? WHERE book_color_id = ?",
        [book_color_name, book_color_code, book_color_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    createBook,
    getBooks,
    getBookTypes,
    deleteBook,
    updateBook,
    getLatestBooks,
    getBookColors,
    createBookColor,
    deleteBookColor,
    updateBookColor
}