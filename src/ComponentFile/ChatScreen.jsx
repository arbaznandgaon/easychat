import React, { Component } from 'react'

export class ChatScreen extends Component {
  render() {
    return (
      <div className='bg-blue-600 relative col-span-3 h-screen'>
        <div className='bg-gray-300 sticky top-0 '>ChatScreen</div>
        <div className='bg-cyan-400'>ChatScreen</div>
        <div className='bg-slate-700 w-full  absolute bottom-0'>ChatScreen</div>

      </div>
    )
  }
}

export default ChatScreen