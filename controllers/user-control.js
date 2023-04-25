const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'Dashboard-Jkorpor-2023'


const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
});


const authToken = (req, res) => {
    try {
        const token = req.body.headers.Authorization.split(' ')[1];
        const decoded = jwt.verify(token, secret);
        res.send({ status: 'ok', decoded });
    } catch (err) {
        res.send({ status: 'error', message: err.message })
    }
}


const Signin = (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE user_name=?", [user_name],
        (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err });
            }
            if (result.length == 0) {
                res.json({ status: 'error', message: 'ไม่พบ username นี้!' })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, isLogin) => {
                    if (isLogin) {
                        const token = jwt.sign({
                            user_id: result[0].user_id,
                            user_name: result[0].user_name,
                            user_role: result[0].user_role,
                        }, secret);
                        res.json({ status: 'ok', token })
                    } else {
                        res.json({ status: 'error', message: 'รหัสผ่านไม่ถูกต้อง' })
                    }
                });
            }
        })
}

const createUser = (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;
    const user_role = "admin"

    bcrypt.hash(password, saltRounds, (err, hashPassword) => {
        db.query("INSERT INTO users (user_name, password, user_role) VALUES (?,?,?)",
            [user_name, hashPassword, user_role],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result)
                }
            }
        );
    });
};



module.exports = {
    Signin,
    createUser,
    authToken
}