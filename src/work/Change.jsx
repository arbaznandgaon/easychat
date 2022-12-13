import React from 'react'
import Change1 from './Change1'
import { useState } from 'react'
import ClassScreen from '../Screens/ClassScreen'



function Change(props) {


  const [ant,setAnt]=useState()


  return (
    <div className=''>
      {/* <button onClick={props.getin} className='text-gray-200 bg-gradient-to-r from-indigo-500 to-red-300 w-max  px-2 py-1 mt-[2rem] font-bold ml-[18rem]'>Get Started</button> */}

      <div>
    {ant ? <ClassScreen/>: <Change1  out={setAnt}/>}
    </div>
    
    </div>
  )
}

export default Change