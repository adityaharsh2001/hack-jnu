const express= require('express');
const {getCaseById, addCase, getPredictedCaseById} = require("../Controllers/case.controller");
const mongoose = require("mongoose");
// const {getCaseById} = require("../Controllers/case.controller");
const Router = express.Router();
const Case=require('./../Schema/cases.schema')

Router.get('/:id', getCaseById);
Router.get('/predictedCase/:id', getPredictedCaseById);
Router.post('/addcase',addCase);

module.exports = Router;
