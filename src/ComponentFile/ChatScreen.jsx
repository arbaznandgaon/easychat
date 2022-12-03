import React, { Component } from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
export class ChatScreen extends Component {
  render() {
    return ( 
      <div className='bg-blue-600 relative col-span-3 h-screen'>
        <div className='bg-gray-300 text-3xl h-12 sticky top-0 '>ChatScreen</div>
        <div className='bg-emerald-600 text-5xl   h-screen'><AccessibilityIcon/></div>
        <div className='bg-slate-700 w-full h-12 text-3xl absolute bottom-0'>ChatScreen</div>

      </div>
    )
  }
}

export default ChatScreen