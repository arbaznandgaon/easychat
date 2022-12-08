
import React from 'react'
import UpperBody from './UpperBody'



function ClassScreen(props) {
    const arr=[{name: "Morgan Sweeny",p1: 12, p2:1000, followers:"followers", following:"following", text:" Morgan has collected ants since they were 6 years old and now has many  dozen ants",
  button:"Follow"}]
   
  return (
    <div className="h-max w-80 mx-auto px-4 py-4 rounded-2xl bg-gradient-to-b from-pink-500 to-red-400">
      <div className="  h-min   rounded-lg">
        <div  className="flex items-center justify-center h-40 ">
          <img
            className="h-44 mt-8 relative w-screen rounded-t-3xl"
            src="https://www.cleavermagazine.com/wp-content/uploads/2019/06/Ant-Lieutenant.jpg"
          />

          <img
            className="w-24 absolute drop-shadow-2xl mt-52 rounded-full"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000"
          />
        </div>
        
        {
          arr.map((item,index) =>    
            <UpperBody key={index} name={item.name} p1={item.p1} p2={item.p2} followers={item.followers} following={item.following} button={item.button} text={item.text}/>)
        }
            
    </div>
    </div>
  )
}

export default ClassScreen