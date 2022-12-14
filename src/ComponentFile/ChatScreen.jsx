import React, { Component, useState } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ChatHead from "./ChatHead";
import WriteMsg from "./WriteMsg";
import ChatScroll from "./ChatScroll";

function ChatScreen({db,user,...props}) {
  const [messagearray, setMessagearray]= useState([])
  return (
    <div className="relative col-span-4 h-screen border-l border-gray-400">
      <div className="bg-blue-600 ">
        <div className="bg-slate-700 text-3xl h-12 w-full top-0 absolute">
          <ChatHead p2={props.p1} />
        </div>
        <div className="bg-[url('https://cdn.wallpapersafari.com/54/0/HluF7g.jpg')] h-screen overflow-y-scroll ">
          <ChatScroll user={user} db={db} message={messagearray} />
        </div>

        <div className="bg-slate-700 w-full h-16 text-3xl absolute bottom-0">
          <WriteMsg user={user}  db={db}  msgSetter={setMessagearray}/>
        </div>
      </div>
    </div>
  );
}
export default ChatScreen;
