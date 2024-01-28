import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CardComp from '../components/CardComp'
import Law_img from '../assets/Law_img.png'
import { useStore } from '../store/useStore'
import CardComp2 from '../components/CardComp2'
// import { useStore } from 'zustand'
const SingleCasePage = () => {
    const dataSet=useStore(state=>state.data)
    const setDataSet=useStore(state=>state.setData)
    const predictedDataSet=useStore(state=>state.predictedData)
    const setPredictedDataSet=useStore(state=>state.setPredictedData)
    useEffect(()=>{
        setDataSet({})
        setPredictedDataSet({})
    },[])
  return (
    <div className="bg-black bg-[url('./assets/bg.svg')] flex gap-y-8 flex-col items-center mt-10 h-max pb-40 ">
        <SearchBar/>
        {(Object.keys(dataSet).length>0 && Object.keys(predictedDataSet).length>0)?(<div className='flex gap-x-4 mx-20 gap-y-10'>
            <CardComp data={dataSet}/>
            <CardComp2 data={predictedDataSet}/>
        </div>):(
             <div className='flex flex-col items-center'> 
            <img src={Law_img} className='object-cover'/>
            <p className='text-2xl font-semibold tracking-tighter '>No case found for the provided case id</p> 
            </div> 
         )}
     
    </div>
  )
}

export default SingleCasePage