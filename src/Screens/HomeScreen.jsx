import React, { useState } from "react";
import ContactList from "../ComponentFile/ContactList";
import ChatScreen from "../ComponentFile/ChatScreen";

function HomeScreen(user,logout) {
  const [active, setActive] = useState(null);

  return (
    <div className="mx-auto overflow-y-hidden  bg-gray-900 w-[75rem] h-screen grid grid-cols-6">
      <ContactList use={user} out={logout} setContact={setActive} />

      {active ? <ChatScreen p1={active} /> : " "}
    </div>
  );
}

export default HomeScreen;
