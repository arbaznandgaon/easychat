import React from 'react'

function Loader() {
  return (
   <div>
     <div className='bg-black h-screen flex justify-center items-center'>
        <img className='relative' src="https://gifimage.net/wp-content/uploads/2017/01/Cool-GIF-Image-for-Whatsapp-and-Facebook-26.gif"/>
    <h1 className='font-bold text-white absolute'>EASY CHAT</h1>
    <a className='absolute font-bold text-white mt-12'>App</a>
    <a className='font-bold text-white absolute mt-48 text-2xl'>Loading...</a>
    </div>
    <div>
        
    </div>
   </div>
  )
}

export default Loader