import React from 'react'
import { useEffect,useState,useLayoutEffect } from 'react'

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

// const [count,setCount]= useState(100);
// const [data,setData]= useState(100);

// function Abc(){
//    console.log("HI there")
// }

// useEffect(() => {
//   console.log("HI there")
 
// },[data] )
// useEffect(() => {
//   console.log("HI ")
  
  // },[] )


//   useEffect(()=>{
//     console.log("first use")
//   })
//   useEffect(()=>{
//     console.log("second use")
//   })
//   useLayoutEffect(()=>{
//     console.log("third use")
//   })
//   function abc(){
//     console.log("fourth use")
//   }
// abc()


// let number = [1,2,3,4,5]

// let newNumber = [...number].reverse()

//  console.log(number)
//  console.log(newNumber)


const [name, setName]=useState("Arbaz")














  return (
    <div className='text-2xl flex font-bold flex-col items-center  justify-center h-screen 
    bg-[url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg)]'>
<h1>{name}</h1> 
<button onClick={()=>setName("Arbaz Nandgaon")}>Change</button>




        </div>
  )

        










}

export default App0