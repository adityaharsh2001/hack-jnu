const mongoose = require('mongoose');
const User = require('../Schema/User.schema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'secret_key';
const signUpController = async (req, res, next) => {
    const { name, email, password, role } = req.body;
    console.log(req.body);

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            name: name,
            password: hashedPassword,
            email: email,
            role: role
        });
        const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
    } catch (error) {
        res.status(500).send("Some error occurred");
    }
};
const loginController = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
};
module.exports = { signUpController,loginController }