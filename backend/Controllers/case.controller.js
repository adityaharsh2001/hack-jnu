const mongoose = require('mongoose');
const Case = require('./../Schema/cases.schema');


const getCaseById = async (req, res) => {
    try {
        const { id } = req.params;
        const caseData = await Case.findOne({ "Indiankanoon ID": id });

        if (!caseData) {
            return res.status(404).json({ message: "Case not found" });
        }
        res.status(200).json({case:caseData});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const addCase = async (req, res) => {
    try {
        const { caseTitle, source, indiankanoonId, caseProceedings, citations, citationsLength, bench } = req.body;

        if (!caseTitle || !indiankanoonId) {
            return res.status(400).json({ message: "Case title and Indiankanoon ID are required" });
        }

        const caseData = new Case({
            "Case Title": caseTitle,
            Source: source,
            "Indiankanoon ID": indiankanoonId,
            "Case Proceedings": caseProceedings,
            Citations: citations,
            "Citations Length": citationsLength,
            Bench: bench,
        });


        await caseData.save();

        res.status(200).json(caseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getCaseById, addCase };
