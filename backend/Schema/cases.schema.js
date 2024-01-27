//create a mongoDb cases

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//  "_id": {
//     "$oid": "65b3d54638b54a269bd6dd24"
//   },
//   "Case Title": "       [Section 234B]      [Complete Act]  ",
//   "Source": "Central Government Act",
//   "Indiankanoon ID": 740920,
//   "Case Proceedings": "",
//   "Citations": [],
//   "Citations Length": 0,
//   "Bench": ""
// }

const CaseSchema = new Schema({
    "Case Title": {type:String , required:true},
     Source: {type:String , required:true},
    "Indiankanoon ID": {type:Number , required:true,unique:true},
    "Case Proceedings": {type:String },
    "Citations": {type:Array },
    "Citations Length": {type:Number },
     Bench: {type:String },
});

const Case = mongoose.model('Case', CaseSchema, 'cases_1');

module.exports = Case;