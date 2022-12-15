import React from 'react'

function UpperBody(props) {
  return (
    <div>
            <div className="bg-white rounded-lg">        
        <img
          className="w-8 ml-60 mt-4 py-4"
          src="https://static.thenounproject.com/png/4287657-200.png"
        />
        <br />
        <a className="ml-16 text-xl font-bold">{props.name}</a> <br />
        <a className="ml-24">Ant Collector</a>
        <div clasNames="py-2">
          <a className="text-blue-500 ml-16 font-bold text-2xl">{props.p1} </a>
          <a className="ml-20 text-blue-500 font-bold text-2xl">{props.p2}</a>
        </div>
        <a className="text-gray-400 ml-12">{props.followers}</a>
        <a className="text-gray-400 ml-16">{props.following}</a> <br />
        <button
          className="rounded-full bg-yellow-400 mt-4 h-10 ml-12 font-bold w-48"
        >
          {props.button}
        </button>
        <br />
        <div className="text-gray-500 p-4 ml-2">
         {props.text}
        </div>
      </div>



    </div>
  )
}

export default UpperBody