const mongoose = require('mongoose');
const User = require('../Schema/User.schema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const signUpController = async (req, res, next) => {
    const { name,email, password,role } = req.body
    console.log(req.body)
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "user already exist" });
        }
        user = await User.create({
            name: name,
            password: password,
            email: email,
            role:role
        });
       res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occoured");
    }
}

const loginController = async (req, res, next) => {
    const user = {
        id: 1,
        username: 'john.doe'
    };
    const secretKey='i_love_anshika';

    const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });

    res.header('Authorization', token).send(user);
}
module.exports = { signUpController,loginController }