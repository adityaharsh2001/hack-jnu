const mongoose = require('mongoose');
const Case=require('./../Schema/cases.schema')
const getCaseById = async (req, res) => {
    try {
        console.log(Case)
        const { id } = req.params;
          const caseData = await Case.findOne({ "Indiankanoon ID": id });
        console.log(caseData)
          res.json(caseData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports = { getCaseById }