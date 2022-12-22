import React from 'react'

function Login(props) {

  return (
    <div >
      <div className="pt-20 flex  bg-gradient-to-r from-indigo-500 to-red-300 h-screen">
    <div className='h-72 px-2 space-y-8 pt-12 rounded-lg  ml-[30rem] flex  w-[36rem] bg-purple-300'>
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
       <a className='ml-20 mt-4'>OR</a>
       <div className="mt-2 ml-10 flex space-x-3">
                <button onClick={()=> props.login()} className=" flex items-center space-x-1 px-4 border py-[6px]  justify-center rounded-md">
                    <img className=" h-5 w-5" src="//heathmont.imgix.net/bitcasino/images/google-oauth2.svg?auto=compress,format" loading="lazy" />
                        <span>Google</span>
                </button>
            </div>

       </div>
       <a className='ml-8 font-bold'>OR</a>

        <div className='ml-16 flex flex-col mb-  items-center'>
        <a className='font-bold'>Enter Mobile Number</a>
          <input type="text" className='rounded-sm mt-2'/>
           <button onClick={()=>props.Mob()} className='bg-gray-200 rounded-lg px-2 font-bold mt-1'>Submit</button>
       
         
          <a className='font-bold mt-2'>Enter OTP</a>
          <input type="text" className='rounded-sm mt-2'/>
       
          <span className='mt-2'>Enter OTP sent to your <br/> Mob +91********;</span>
        </div>
       </div>
       
    </div>
    </div>
  )
}

export default Login