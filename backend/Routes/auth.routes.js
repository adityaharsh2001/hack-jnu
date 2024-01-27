const express=require('express');
const {signUpController, loginController} = require("../Controllers/auth.controller");
const {authenticate} = require("../Utils/jwt");

const Router=express.Router();

Router.get('/',(req,res)=>{
    res.send("Server is Up and Running");
});
Router.post('/signup',signUpController);
Router.post('/login',loginController);

module.exports=Router;