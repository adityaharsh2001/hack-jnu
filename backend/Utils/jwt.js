const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';

const authenticate = (req, res, next) => {
    // const token = req.headers['authorization'];
    //bearer token
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access Denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send('Invalid Token.');
    }
};
module.exports = { authenticate }