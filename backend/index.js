const express=require('express');
const {connectDB} = require("./Utils/db");
const app=express();
const Router =require('./Routes/auth.routes');
const CaseRouter =require('./Routes/cases.route');
app.use(express.json());
connectDB();

app.use('/api',Router);
app.use('/api/cases',CaseRouter);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})