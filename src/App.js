import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ClassScreen from "./Screens/ClassScreen";
import { useState } from "react";
import Login from "./ComponentFile/Login";

function App() {

 const name="Arbaz";
 const password=9632;

  return (
    

   
    <div>
      
      <Login/>

      <div className=" bg-gray-900 h-screen w-screen">
        <HomeScreen />
      </div>

      {/* <ClassScreen/> */}
    </div>
  );
}

export default App;
