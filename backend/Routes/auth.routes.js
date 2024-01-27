const express=require('express');
const {signUpController, loginController} = require("../Controllers/auth.controller");
const {authenticate} = require("../Utils/jwt");

const Router=express.Router();

Router.post('/signup',signUpController);
Router.post('/login',loginController);

module.exports=Router;