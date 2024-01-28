import axios from "axios";

export const getCaseByCaseId = async (caseId) => {
    const response = await axios(`/api/cases/${caseId}`);
    const data = await response.json();
    return data;
};
