import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Change1 from "./work/Change1";
import Login from "./ComponentFile/Login";
import Change from "./work/Change";
import app from './firebase'



function App() {
  const [user, setUser] = useState(false);
  const [mor,setMor] = useState(null)

  const auth= getAuth(app);
  const provider = new GoogleAuthProvider();

  

  return (
    <div> 
    <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen /> : <Login  login={setUser} />} 




    {/* {mor ? <Change1/>: <Change getin={setMor}/>} */}
 
  </div>
   </div>
   
  )
}

export default App;
