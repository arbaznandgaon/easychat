import React from 'react'

function Login(props) {
  
  return (
    <div >
      <div className="pt-20 bg-gradient-to-r from-indigo-500 to-red-300 h-screen">
    <div className='h-72 px-2 space-y-8 pt-12  ml-[35rem]   w-1/5 bg-purple-300'>
       <div className='ml-12 '>
       <div >
       <label>UserName</label><br></br>
        <input className='rounded-sm' type="text"/><br></br>
       </div>
       <div>
       <label>Password</label><br></br>
        <input className='rounded-sm' type="password"></input>
       </div>
       <div>
        <button onClick={props.login}  className='bg-gray-200 w-max px-2 py-1 mt-6 font-bold ml-16'>Login</button>
       </div>

       </div>
       </div>
    </div>
    </div>
  )
}

export default Login