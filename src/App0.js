import React from 'react'
import { useEffect,useState } from 'react'

function App0() {

// let prom = new Promise((resolve,reject)=>{
//     let a=1+1;
//     if (a==22){
//         resolve('working')
//     }
//     else {
//         reject('still Working')
//     }
// })

// prom.then((message)=>{
//     console.log('code is '+ message)
// }).catch((message)=>{
//     console.log('code is '+ message)
// })
// const prom1= new Promise((resolve,reject)=>{
        //     resolve ('001')
        // })
        // const prom2= new Promise((resolve,reject)=>{
        //     resolve ('002')
        // })
        // const prom3= new Promise((resolve,reject)=>{
        //     resolve ('003')
        // })

        //     Promise.all([
        //         prom1,prom2,prom3
        //     ]).then((message)=>{
        //         console.log('working '+message)
        //     })

const [count,setCount]= useState(100);
const [data,setData]= useState(100);

function Abc(){
   console.log("HI there")
}

useEffect(() => {
 Abc()
 
}, [data])
useEffect(() => {
    console.log("working"+count)
   
  }, [count])


  return (
    <div className='App0'>
        <h1>{count}</h1>
         <h1>{data}</h1> 
         <button onClick={()=>setData(data +1)}>D</button>
        <button onClick={()=>{setCount (count +1)}}>C</button>
    </div>
  )

        










}

export default App0