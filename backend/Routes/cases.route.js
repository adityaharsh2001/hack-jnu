const express= require('express');
const {getCaseById} = require("../Controllers/case.controller");
const mongoose = require("mongoose");
// const {getCaseById} = require("../Controllers/case.controller");
const Router = express.Router();
const Case=require('./../Schema/cases.schema')

Router.get('/case/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const caseData = await Case.findOne({ "Indiankanoon ID": id });
        res.json(caseData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }

});


module.exports = Router;
