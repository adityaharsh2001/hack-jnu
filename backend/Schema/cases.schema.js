//create a mongoDb cases

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseSchema = new Schema({

    "Case Title": {type:String , required:true},
     Source: {type:String , required:true},
    "Indiankanoon ID": {type:Number , required:true,unique:true},
    "Case Proceedings": {type:String },
    "Citations": {type:Array },
    "Citations Length": {type:Number },
     Bench: {type:String },
});

const Case = mongoose.model('Case', CaseSchema, 'cases');

module.exports = Case;