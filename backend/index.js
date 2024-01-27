const express=require('express');
const {connectDB} = require("./Utils/db");
const app=express();
const Router =require('./Routes/auth.routes');
app.use(express.json());
connectDB();
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/api',Router);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})