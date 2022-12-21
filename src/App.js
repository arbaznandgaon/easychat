import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { getAuth,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Login from "./ComponentFile/Login";
import app from './firebase'
import { useEffect } from "react";
import Loader from "./ComponentFile/Loader";



function App() {
  const [user, setUser] = useState(null);
  // // const [mor,setMor] = useState(null)

  const auth= getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);


  async function SignIn(){
  await  signInWithPopup(auth, provider)
    .then((result) => {     
      const data = result.user;
      setUser(data);
     }).catch((error) => {
      console.log(error)
      setUser(null)
    });
  }

async function SignOut(){
 await signOut(auth).then(()=>{}).catch(()=>{})
}



useEffect(()=>{
  onAuthStateChanged(auth, (u)=>{
    if(u){
      setUser(u)
    }
    else{
      setUser(null)
    }
  }) 
},[user])

const [load, setLoad]= useState(true);
setTimeout(()=>{
setLoad(false)
},3000)

if (load) return <Loader/>










  return (
    <div> 
    

  <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen user={user} logout={SignOut}/> : <Login  login={SignIn} />}  
      
    {/* { {mor ? <Change1/>: <Change getin={setMor}/>} } */}
  </div>

   </div>
   
  )
}

export default App;
