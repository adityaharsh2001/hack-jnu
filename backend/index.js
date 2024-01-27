const express = require('express');
const {connectDB} = require("./Utils/db");
const app = express();
const cors = require('cors');
const Router = require('./Routes/auth.routes');
app.use(cors({
    // origin: 'http://localhost:3000', 127.0.0.1:3000
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://dcm.geekyadi.dev'],
    credentials: true
}));
app.use(express.json());
connectDB();
const cookieParser = require('cookie-parser');
// app.use(cookieParser());
app.use('/', Router);
app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
