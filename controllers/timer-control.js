const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});

const getTimer = (req, res) => {
    db.query("SELECT * FROM timer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const updateTimer = (req, res) => {
    const timer_date = req.body.timer_date
    const timer_label = req.body.timer_label
    const timer_label_end = req.body.timer_label_end
    const timer_display = req.body.timer_display

    db.query("UPDATE timer SET timer_date = ? , timer_label = ?, timer_label_end = ?, timer_display = ? WHERE timer_id = 1",
        [timer_date, timer_label, timer_label_end, timer_display],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send({ message: 'successfully' })
            }
        })
}

module.exports = {
    getTimer,
    updateTimer
}