const { registerUser, findUserByEmail } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            status: 'success',
            token,
            data: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred during login',
            error
        });
    }
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(409).json({
                status: 'error',
                message: 'Email is already registered'
            });
        }

        await registerUser({ username, email, password });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred during registration',
            error
        });
    }
};
