import React from 'react'
import ContactList from '../ComponentFile/ContactList'
import ChatScreen from '../ComponentFile/ChatScreen'
function HomeScreen() {
  return (
    <div className='mx-auto  bg-yellow-500 w-[70rem] h-screen grid grid-cols-4'>
        <ContactList/>
        <ChatScreen/>
    </div>
  )
}

export default HomeScreen