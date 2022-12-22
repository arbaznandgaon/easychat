import HomeScreen from "./Screens/HomeScreen";
import { useState } from "react";
import { getAuth,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Login from "./ComponentFile/Login";
import app from './firebase'
import { useEffect } from "react";
import Loader from "./ComponentFile/Loader";
import { RecaptchaVerifier } from "firebase/auth";
import firebase from "./firebase"
import {phoneNumber} from "./PhoneNumber";



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
},5000)

if (load) return <Loader/>

// handleClick=()=>{
//   let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//   let number='+919380610250';
//   firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
//     let code= prompt('enter the otp','');
//     if (code==null)return;
//     e.confirm(code).then(function(result){
//       console.log(result.user,'user');
//       document.querySelector('label').textContent=result.user.phoneNumber +"Number Verified";
//     }).catch((error)=>{
//       console.log(error)
//     })
//   })
// }

const handleClick=()=>{
  let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
  firebase
  .auth()
  .signInWithPhoneNumber(phoneNumber,recaptcha)
  .then((res)=>{
    let code = prompt("Enter the OPT");
    if (code ==null){
      return
    }
    res
    .confirm(code)
    .then((result)=>{
      console.log(result.user,"User");
      document.querySelector("label").textContent=
      result.user.phoneNumber+ "Number Verified";
    })
    .catch((err)=>{
      console.loh(err);
    });
  });
}








  return (
    <div> 
    {/* <div>
      <button>Click</button>
    </div> */}

  <div className=" bg-gray-900 h-screen w-screen">
      {user ? <HomeScreen user={user} logout={SignOut}/> : <Login  login={SignIn} />}  
      
    {/* { {mor ? <Change1/>: <Change getin={setMor}/>} } */}
  </div>
<div>
  <div id="recaptcha"></div>
  <label></label>
  <button onClick={handleClick}>Click</button>
</div>
   </div>
   
  )
}

export default App;
