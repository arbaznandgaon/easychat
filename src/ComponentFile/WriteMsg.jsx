import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 

function WriteMsg({db,user,...props}) {

const schema={

  myMessage:"",
  uid:user?.uid,
  img:user?.photoURL,
  displayName:user?.displayName
}
// console.log(user)
const [message,setMessage]= useState(schema)

function handleChange(event){
  
  const {name,value} = event.target;
  setMessage(cm=>({...cm, [name] : value})
  )}

async function postMessage(){
  if (message.myMessage === "") return;
  // console.log(message)
   await addDoc(collection(db, "grpMSG"), message);
   setMessage(schema)
   

}
// button.addEventListener("click",postMessage());
// console.log(db)

  return (
    <div className="flex space-x-2 ">
      <div className="mt-4 flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
      name="myMessage"
      value={message.myMessage}
      onChange={handleChange}
        placeholder="Type a Message"
        className="bg-slate-500 text-lg pl-2 rounded-lg mt-3 h-10 w-full"
      /><button onClick={()=>postMessage()} className="rounded-full mt-2 px-4 py-2 text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Send</button>
      <div className="pr-2">
        <MicIcon className="mt-3 " />
      </div>
    </div>
  );
}

export default WriteMsg;
