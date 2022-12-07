import React, { Component } from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ChatHead from './ChatHead';
import WriteMsg from './WriteMsg';



function ChatScreen (props) {
 
    return ( 
      <div className='relative col-span-4 h-screen border-l border-gray-400'>
      <div className='bg-blue-600 '>
        <div className='bg-slate-700 text-3xl h-12 sticky top-0 '><ChatHead p2={props.p1}/></div>
        <div className='bg-gray-400 text-5xl   h-screen'>
      
        
        
        </div>
        
        <div className='bg-slate-700 w-full h-16 text-3xl absolute bottom-0'><WriteMsg/></div>
        </div>

      </div>
    )
  }


export default ChatScreen