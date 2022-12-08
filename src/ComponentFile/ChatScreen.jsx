import React, { Component } from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ChatHead from './ChatHead';
import WriteMsg from './WriteMsg';



function ChatScreen (props) {
 
    return ( 
      <div className='relative col-span-4 h-screen border-l border-gray-400'>
        <img className='relative h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic_7pjbI4SDSIgi-hpV3UE2snj9rageoKBg&usqp=CAU" />
      <div className='bg-blue-600 '>
        <div className='bg-slate-700 text-3xl h-12 w-full top-0 absolute'><ChatHead p2={props.p1}/></div>
        <div className='bg-gray-400 text-5xl   h-screen'>
      
        
        
        </div>
        
        <div className='bg-slate-700 w-full h-16 text-3xl absolute bottom-0'><WriteMsg/></div>
        </div>

      </div>
    )
    }
export default ChatScreen