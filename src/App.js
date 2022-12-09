import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ClassScreen from "./Screens/ClassScreen";
import { useState } from "react";

import Login from "./ComponentFile/Login";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen /> : <Login  login={setUser} />}

      {/* <ClassScreen/> */}
    </div>
  );
}

export default App;
