import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ClassScreen from "./Screens/ClassScreen";
import { useState } from "react";
import Change from "./work/Change";
import Change1 from "./work/Change1";
import Host from "./ComponentFile/Host";

import Login from "./ComponentFile/Login";

function App() {
  const [user, setUser] = useState(false);
  
  const [mor,setMor] = useState(null)
  

  return (
    <div> 
  {/* <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen /> : <Login  login={setUser} />}

    </div> */}
     {/* {<ClassScreen/> } */}

    
    <div>
    {mor ? <Change1/>: <Change  getin={setMor}/>}
    </div>
    {/* <Host/> */}


     
 
  

    </div>
  );
}

export default App;
