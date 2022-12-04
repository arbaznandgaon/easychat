import React from 'react'

function Card(props) {
  return (
    <div className='justify-between flex border-y border-gray-500'>
    <div className='flex gap-2 items-center '>
    <img className='rounded-full  w-12 h-12 mt-2 ' src={props.img}></img>
    <div>
    <p className='text-xl text-white'>{props.name}</p>
    <p className='text-sm text-white'>Your Message was Deleted</p>
    </div>
    </div>
    <div className='pr-2 text-white'>
     12:00
    </div>
    </div>
  )
}

export default Card