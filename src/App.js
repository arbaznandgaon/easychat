import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { getAuth,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Login from "./ComponentFile/Login";
import app from './firebase'
import { useEffect } from "react";



function App() {
  const [user, setUser] = useState(null);
  // // const [mor,setMor] = useState(null)

  const auth= getAuth(app);
  const provider = new GoogleAuthProvider();


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
 await signOut(auth).then((hi)=>{console.log(hi)}).catch((hello)=>{console.log(hello)})
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
