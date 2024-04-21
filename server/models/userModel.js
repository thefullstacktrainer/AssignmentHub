// server/models/userModel.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.registerUser = async (data) => {
    const { username, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};
