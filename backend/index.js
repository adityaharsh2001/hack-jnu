const express = require('express');
const {connectDB} = require("./Utils/db");
const app = express();
const cors = require('cors');
const Router = require('./Routes/auth.routes');
app.use(express.json());
connectDB();
app.use(cors({
    origin: ["http://localhost:5173", "https://dcm.geekyadi.dev"],
    credentials: true,
}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/', Router);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
