import React from 'react'
import {useStore} from "../store/useStore.js";
import CardComp3 from "../components/CardComp3.jsx";


const DataPage = () => {
    const data=useStore(state=>state.priorityData)
  return (
    <div className='p-8'>
        <CardComp3 data={data}/>
    </div>
  )
}

export default DataPage