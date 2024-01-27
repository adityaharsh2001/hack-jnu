import axios from 'axios';
import React, { useState } from 'react';
import { useStore } from '../store/useStore';
// import { useStore } from 'zustand';

const SearchBar = () => {
    const [caseId,setCaseId]=useState()
    const dataSet=useStore(state=>state.data)
    const setDataSet=useStore(state=>state.setData)
    const setPredictedDataSet=useStore(state=>state.setPredictedData)
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await axios.get(`/api/cases/${caseId}`)
        const predictedRes=await axios.get(`/api/cases/predictedCase/${caseId}`)
        // console.log(predictedRes);
        setDataSet(res.data.case)
        setPredictedDataSet(predictedRes.data.predictedCases)
        // console.log(res);
        // console.log(predictedRes);
    }
  return (
    <div className="flex items-center justify-center border border-purple-300 bg-white  rounded-full overflow-hidden w-2/3 mx-auto p-4">
      {/* Search Icon and Placeholder */}
      <div className="flex-shrink-0 p-2">
        <svg
          className="h-8 w-8 text-purple-300"
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
        placeholder="Enter your Case Id..."
        value={caseId}
        onChange={(e)=>setCaseId(e.target.value)}
        className="py-2 px-4 w-full focus:outline-none font-semibold text-xl text-purple-500 "
      />
      {/* Search Button with Icon */}
      <button className="flex-shrink-0 p-2" onClick={handleSubmit}>
        <svg
          className="h-8 w-8 text-purple-300"
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
  );
};

export default SearchBar;
