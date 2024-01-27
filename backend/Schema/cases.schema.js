//create a mongoDb cases

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
        "Case Title": String,
        Source: String,
        "Indiankanoon ID": Number,
        "Case Proceedings": String,
        Citations: [Number],
        "Citations Length": Number,
        Bench: String,
    });
const Case = mongoose.model('Case', CaseSchema, 'cases');

module.exports = Case;