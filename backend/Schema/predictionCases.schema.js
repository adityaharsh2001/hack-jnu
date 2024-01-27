const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
    name: String,
    role: String, // Assuming "Petitioner" or "Respondents" as possible roles
});

const caseSchema = new mongoose.Schema({
    case_id: Number,
    case_type: String,
    case_complexity: Number,
    filing_date: String,
    pending_duration: String,
    case_value: String,
    adr_opportunities: Number,
    number_of_hearings: Number,
    party_information: [partySchema],
    number_of_parties_involved: Number,
    legal_representation: String,
    sections: [String],
    legal_grounds: [String],
    statutory_compliance: Boolean,
    urgency_factors: Number,
    appeals_and_revision_petitions: Boolean,
    geographic_factors: String,
    state_of_filing: String,
    public_interest: Number,
    volume_of_evidence: Number,
    number_of_legal_issues: Number,
    time_sensitivity: Number,
    case_severity: Number,
    priority: String,
});

const PredictedCase = mongoose.model('PredictedCase', caseSchema, 'predictionData');

module.exports = PredictedCase;
