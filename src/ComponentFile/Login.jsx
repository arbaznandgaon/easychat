import React from 'react'

function Login(props) {
  return (
    <div className='h-96 px-2 space-y-8   ml-[35rem] mt-12 w-1/5 bg-purple-300'>
       <div >
       <label>UserName</label><br></br>
        <input className='rounded-sm' type="text">{props.name}</input><br></br>
       </div>
       <div>
       <label>Password</label><br></br>
        <input className='rounded-sm' type="password">{props.password}</input>
       </div>
       <div>
        <button  className='bg-gray-200 w-max px-2 py-1 font-bold ml-12'>Login</button>
       </div>






    </div>
  )
}

export default Login