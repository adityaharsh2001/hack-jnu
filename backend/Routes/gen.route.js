const express= require('express');
const axios = require("axios");
const Router = express.Router();

function convertToValidJson(jsonString) {
    try {
        // Remove escape characters from the string
        const cleanedString = jsonString.replace(/\\/g, '');

        // Parse the cleaned string as JSON
        return JSON.parse(cleanedString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null; // Return null or handle the error as needed
    }
}

Router.post('/case/prioritize', async (req, res) => {
    try {
        const {input} = req.body;
        const result = await axios.post('http://127.0.0.1:5000/predict', {input});
        res.status(200).json({message:"Success",data:result.data.result});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }

});


module.exports = Router;
