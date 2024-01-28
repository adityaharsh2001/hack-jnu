import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useStore} from "../store/useStore.js";

const CreateCaseForm = () => {
  const [cases, setCases] = useState(false);
  const setPredictions = useStore((state) => state.setPriorityData);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    caseTitle: '',
    source: '',
    kanoonId: 0,
    caseProceedings: '',
    citations: [],
    citationsLength: 0,
    bench: '',
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    try{
        const res=await axios.post('/api/cases/addcase',{
            caseTitle:formData.caseTitle,
            source:formData.source,
            indiankanoonId:formData.kanoonId,
            caseProceedings:formData.caseProceedings,
            citations:[formData.citations],
            citationsLength:formData.citationsLength,
            bench:formData.bench
        })
      setCases(true);
    }catch(error){
        console.log(error)
    }

  };
    const MAX_RETRIES = 5;

    const getPriority = async (input, currentRetry = 0) => {
        try {
            const res = await axios.post(`/api/ai/case/prioritize`, { input });

            if (res.status === 200) {
                // Successful response
                setPredictions(res.data.data);
                navigate('/datapage');
            } else {
                // Retry if the status is not 200
                throw new Error(`Unexpected response status: ${res.status}`);
            }
        } catch (error) {
            // Check if it's worth retrying
            if (currentRetry < MAX_RETRIES - 1) {
                // Retry with an exponential backoff delay
                const delay = Math.pow(2, currentRetry) * 1000;
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay));

                // Increment retry count and try again
                await getPriority(input, currentRetry + 1);
            } else {
                // Max retries reached, throw the last error
                console.error('Max retries reached or unexpected error:', error.message);
                // You may choose to throw the error or handle it differently based on your requirements
            }
        }
    };

  // useEffect(() => {
  //   getPriority(cases);
  // }, [cases]);

  return (
    <div className="max-w-xl bg-white mx-auto mt-10 p-6  rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-black mb-4">Submit a case to analyse</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Case Title
          </label>
          <input
            type="text"
            id="caseTitle"
            name="caseTitle"
            value={formData.caseTitle}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white rounded-md"
          />
        </div>

        {/* Repeat similar structure for other form fields */}

        <div className="mb-4">
          <label htmlFor="source" className="block text-sm font-medium text-gray-600">
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Case Id
          </label>
          <input
            type="number"
            id="kanoonId"
            name="kanoonId"
            value={formData.kanoonId}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Case Proceedings
          </label>
          <input
            type="text"
            id="caseProceedings"
            name="caseProceedings"
            value={formData.caseProceedings}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Citations
          </label>
          <input
            type="number"
            id="citations"
            name="citations"
            value={formData.citations}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Citations length
          </label>
          <input
            type="number"
            id="citationsLength"
            name="citationsLength"
            value={formData.citationsLength}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-600">
            Bench
          </label>
          <input
            type="text"
            id="bench"
            name="bench"
            value={formData.bench}
            onChange={handleChange}
            className="mt-1 p-2 w-full border bg-white  rounded-md"
          />
        </div>


        <div className="mt-4">
          <button
            // type="submit"
              onClick={cases?()=>getPriority(cases):handleSubmit}
            className="bg-purple-500 text-white px-4 py-2   rounded-md hover:bg-purple-300"
          >
            { cases ? "Prioritize" : "Submit" }
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCaseForm;
