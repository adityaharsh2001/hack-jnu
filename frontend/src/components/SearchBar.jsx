import axios from 'axios';
import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const SearchBar = () => {
    const [caseId, setCaseId] = useState('');
    const dataSet = useStore((state) => state.data);
    const setDataSet = useStore((state) => state.setData);
    const setPredictedDataSet = useStore((state) => state.setPredictedData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`/api/cases/${caseId}`);
        const predictedRes = await axios.get(`/api/cases/predictedCase/${caseId}`);
        setDataSet(res.data.case);
        setPredictedDataSet(predictedRes.data.predictedCases);
    };

    return (
        <div className="flex flex-col items-center justify-center w-2/3 mx-auto mt-8">
            <div className="text-white font-bold text-4xl mb-6">Search for your case and analyze with our model</div>
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="h-6 w-6 text-purple-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M21 21l-6-6M9 3a6 6 0 110 12 6 6 0 010-12z"></path>
                    </svg>
                </div>
                <input
                    type="number"
                    placeholder="Enter your Case ID..."
                    value={caseId}
                    onChange={(e) => setCaseId(e.target.value)}
                    className="py-2 px-10 w-full bg-white focus:outline-none rounded-full text-xl placeholder-purple-500 border border-purple-300 transition-all duration-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                />
                <button
                    className="absolute inset-y-0 right-0 flex items-center justify-center p-2 bg-purple-500 rounded-full cursor-pointer transition-all duration-300 hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-200"
                    onClick={handleSubmit}
                >
                    <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
