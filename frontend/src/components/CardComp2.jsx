import React, { useState } from 'react';

const CardComp2 = ({ data }) => {

  

  return (
    <div className="card w-[90%] mx-auto rounded-xl bg-base-100 shadow-xl">
      <div className="card-body text-center flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-center">Case Predictions</h1>
        <h1 className="text-xl font-semibold">
          <span className="text-purple-400">Case Type:</span> {data['Case Type']}
        </h1>
          <p>
            <span className="text-purple-400">priority: </span>
            {data['priority']}
          </p>
        <p>
          <span className="text-purple-400">Case Complexity: </span> {data['Case Complexity']}
        </p>
        <p>
          <span className="text-purple-400">Filling date: </span> {data['Filling date']}
        </p>
        <p>
          <span className="text-purple-400">Pending Duration: </span>
          {data['Pending Duration']}
        </p>
          <p>
            <span className="text-purple-400">Number of Hearings: </span>
            {data['Number of Hearings']}
          </p>
        
          <p>
            <span className="text-purple-400">Party information: </span>
            {data['Party information']}
          </p>

          <p>
            <span className="text-purple-400">Number of Parties Involved: </span>
            {data['Number of Parties Involved']}
          </p>

          {data['Sections'].length>0 && <p>
            <span className="text-purple-400">Sections: </span>
            {data['Sections']}
          </p>}

          {data['Legal Grounds'].length>0 && <p>
            <span className="text-purple-400">Legal Grounds: </span>
            {data['Legal Grounds']}
          </p>}

          <p>
            <span className="text-purple-400">Urgency Factors: </span>
            {data['Urgency Factors']}
          </p>

          <p>
            <span className="text-purple-400">Appeals and Revision Petitions: </span>
            {data['Appeals and Revision Petitions']}
          </p>

          <p>
            <span className="text-purple-400">Geographic Factors: </span>
            {data['Geographic Factors']}
          </p>

          <p>
            <span className="text-purple-400">State of Filing: </span>
            {data['State of Filing']}
          </p>

          <p>
            <span className="text-purple-400">Public interest: </span>
            {data['Public interest']}
          </p>

          <p>
            <span className="text-purple-400">Volume of Evidence: </span>
            {data['Volume of Evidence']}
          </p>

          <p>
            <span className="text-purple-400">Number of Legal Issues: </span>
            {data['Number of Legal Issues']}
          </p>

          <p>
            <span className="text-purple-400">Time Sensitivity: </span>
            {data['Time Sensitivity']}
          </p>

          <p>
            <span className="text-purple-400">Case Severity: </span>
            {data['Case Severity']}
          </p>


          {data['party_information'].length>0 && <p>
            <span className="text-purple-400">party information: </span>
            {data['party_information']}
          </p>}


      </div>
    </div>
  );
};

export default CardComp2;
