import React from 'react'
import { useState } from 'react'



function Change1(props) {

const [data, setData]= useState({
fo: "???",
fl : "???",
discription: "??"})

  return (
    <div className='h-[35rem] mt-4 rounded-2xl px-4 py-6 bg-gradient-to-b from-pink-500 to-red-400 w-80 mx-auto'  >
         <div className="h-[32rem] w-72 rounded-t-3xl  bg-white">
      <div className="  h-min   rounded-lg">
        <div  className="flex items-center justify-center h-40 ">
          <img
            className="h-44 mt-4 relative w-screen rounded-t-3xl"
            src="https://www.cleavermagazine.com/wp-content/uploads/2019/06/Ant-Lieutenant.jpg"
          />

          <img
            className="w-24 absolute drop-shadow-2xl mt-52 rounded-full"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000"
          />
        </div>
        
       <div className='mt-24'>
       <a className="ml-16 text-xl font-bold">Morgan Sweeney</a> <br />
        <a className="ml-24">Ant Collector</a>
       </div>
       <div className="mt-">
          <a className="text-blue-500 ml-16 font-bold text-2xl">{data.fo} </a>
          <a className="ml-20 text-blue-500 font-bold text-2xl">{data.fl}</a>
        </div>
        <div >
        <a className="text-gray-400 ml-12">followers</a>
        <a className="text-gray-400 ml-16">following</a>
        </div>
            
    </div>
    
      <button onClick={()=> setData({ fo:"12", fl:"1000", discription: "Morgan has collected ants since they were 6 years old and now has many  dozen ants"})} 
      className=' rounded-full bg-yellow-400 h-10 text-am 
 w-48  px-8 py-1 mt font-bold mt-3 ml-[3rem]'>
  Follow</button>
   <div className='ml-8 mt-3 font-bold'>
  {data.discription}
   </div>
   
  
    </div>


    </div>
  )
}

export default Change1