import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Login from "./ComponentFile/Login";
import app from './firebase'



function App() {
  const [user, setUser] = useState(null);
  // // const [mor,setMor] = useState(null)

  const auth= getAuth(app);
  const provider = new GoogleAuthProvider();


  async function Signup(){
  await  signInWithPopup(auth, provider)
    .then((result) => {     
      const data = result.user;
      setUser(data);
      // ...
    }).catch((error) => {
      console.log(error)
      setUser(null)
    });
  

  }



// async function A(){
//   console.log("A")
 
// }
//  function B(){
//   console.log("B")
// }
// A();
// B();
// d();
// c();

// let value= new Promise(function (A,B){
//   let name= "Arbaz111";
//   if  (name==="Arbaz"){
//     A("Got It")
//   }
//   else {
//     B("Didnt get It")
//   }
// })

// value.then(function(va){
//   console.log(va)
// }).catch(function(av){
// console.log(av)
// })

async function ABC(){
  let ppo = new Promise(function (A){
    A(500)
  })
  let newval =  await ppo.then(function(r){
    
  })
}

console.log(ABC())


  return (
    <div> 
    <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen /> : <Login  login={Signup} />} 
      

    {/* {mor ? <Change1/>: <Change getin={setMor}/>} */}
 
  </div>
   </div>
   
  )
}

export default App;
