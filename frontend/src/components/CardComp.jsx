import React, { useState } from 'react';

const CardComp = ({ data }) => {
  const [showFullProceedings, setShowFullProceedings] = useState(true);

  const toggleReadMore = () => {
    setShowFullProceedings(!showFullProceedings);
  };

  return (
    <div className=" w-[90%] mx-auto h-fit rounded-xl bg-base-100 shadow-xl">
      <div className="card-body text-center flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-center">Case Insights</h1>
        <h1 className="text-xl font-semibold">
          <span className="text-purple-400">Case Title:</span> {data['Case Title']}
        </h1>
        <p>
          <span className="text-purple-400">Source: </span> {data['Source']}
        </p>
        <p>
          <span className="text-purple-400">Case Id: </span> {data['Indiankanoon ID']}
        </p>
        <p>
          <span className="text-purple-400">Case Proceedings: </span>
          {showFullProceedings ? data['Case Proceedings'] : `${data['Case Proceedings'].slice(0, 100)}...`}
          <button
            className="text-purple-500 ml-2 underline cursor-pointer"
            onClick={toggleReadMore}
          >
            {showFullProceedings ? 'Read Less' : 'Read More'}
          </button>
        </p>
        {data['Citations'].length > 0 && (
          <p>
            <span className="text-purple-400">Citations: </span>
            {data['Citations']}
          </p>
        )}
        {data['Citations Length'] > 0 && (
          <p>
            <span className="text-purple-400">Total Citations: </span>
            {data['Citations Length']}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardComp;
