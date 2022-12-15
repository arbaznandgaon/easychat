import logo from "./logo.svg";
import { getAuth } from "firebase/auth";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";

import { useState } from "react";

import Change1 from "./work/Change1";


import Login from "./ComponentFile/Login";
import Change from "./work/Change";

function App() {
  const [user, setUser] = useState(false);
  
  const [mor,setMor] = useState(null)

  

  return (
    <div> 
   {/* <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen /> : <Login  login={setUser} />} */}

    {/* <Host/> */}

{/* {mor ? <ClassScreen/>:<Change1 out={setMor}/>} */}
    {mor ? <Change1/>: <Change getin={setMor}/>}
 
  </div>

   
  )
}

export default App;
