const express = require('express');
const {connectDB} = require("./Utils/db");
const app = express();
const Router = require('./Routes/auth.routes');
const cors = require('cors');
const CaseRouter = require('./Routes/cases.route');
const GenRouter = require('./Routes/gen.route');
const cookieParser = require('cookie-parser');
(async function(){
    app.use(express.json());
    app.use(cookieParser());
    await connectDB();
    app.use(cors({
        origin: ['http://localhost:5173', 'https://localhost:5173', 'http://127.0.0.1:5173', 'https://127.0.0.1:5173','https://dcm.geekyadi.dev'],
        credentials: true,
    }));
    app.use('/api', Router);
    app.use('/api/cases', CaseRouter);
    app.use('/api/ai', GenRouter);
    app.use(express.json());
    app.listen(8000, () => {
        console.log("Server is running on port 8000");
    });
})();