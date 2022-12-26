import React, { useState } from "react";
import ContactList from "../ComponentFile/ContactList";
import ChatScreen from "../ComponentFile/ChatScreen";

function HomeScreen({user,db,logout}) {
  const [active, setActive] = useState(null);

  return (
    <div className="mx-auto overflow-y-hidden  bg-gray-900 w-[75rem] h-screen grid grid-cols-6">
      <ContactList user={user} db={db} logout={logout} setContact={setActive} />

      {active ? <ChatScreen user={user} p1={active} db={db} /> : " "}
    </div>
  );
}

export default HomeScreen;
