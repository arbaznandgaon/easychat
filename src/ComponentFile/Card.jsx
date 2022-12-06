import React from 'react'

function Card(props) {
  return (
    <div className='justify-between flex border-y border-gray-500 hover:bg-gradient-to-bl from-slate-900 to-gray-300'>
    <div className='flex gap-2 items-center '>
    <img className='rounded-full  w-12 h-12 mt-2 ' src={props.img}></img>
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