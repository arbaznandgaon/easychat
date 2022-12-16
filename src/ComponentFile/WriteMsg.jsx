import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";

function WriteMsg() {

const schema={
  uid: 'arbaz123',
  myMessage:"",
}

const [text,setText]= useState(schema)

function handleChange(event){
  console.log(event)
  const {value} = event.target;
  setText({uid:'sumera123',myMessage:value})
}


  return (
    <div className="flex space-x-2 ">
      <div className="mt-4 flex space-x-3 ">
        <TagFacesIcon /> <AttachFileIcon className="rotate-45" />
      </div>
      <input
      name="myMessage"
      value={text.myMessage}
      onChange={handleChange}
        placeholder="Type a Message"
        className="bg-slate-500 text-lg pl-2 rounded-lg mt-3 h-10 w-full"
      />

      <div className="pr-2">
        <MicIcon className="mt-3 " />
      </div>
    </div>
  );
}

export default WriteMsg;
