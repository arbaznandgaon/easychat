import React from 'react'

function Card(props) {
  return (
    <div className=' justify-between flex border-b h-16 border-gray-500 hover:bg-gradient-to-bl from-slate-900 to-gray-300'>
    <div className='flex  items-center gap-x-2'>
    <img className='rounded-full  w-12 h-12  py-' src={props.img}></img>
    <div>
    <p className='text-xl text-white '>{props.name}</p>
    <p className='text-sm text-white'>{props.msg}</p>
    </div>
    </div>
    <div className='pr-2 text-white'>
    {props.time}
    </div>
    </div>
  )
}

export default Card