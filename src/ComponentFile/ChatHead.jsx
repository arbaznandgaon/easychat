import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ChatHead(props) {
  console.log(props.p2)
  return (
    <div className='flex justify-between '>
<div className='flex space-x-2'>
    <img className='rounded-full ml-2  w-10 h-10 mt-1' src={props.p2?.img} />
    <div className=''>
    <p className='text-lg font-semibold text-white'>{props.p2?.name}</p>
    <p className='text-sm text-gray-400  '>online</p>
    </div>
</div>
<div className='space-x-4 pr-2 text-white'>
<VideocamIcon/> <CallIcon/><SearchIcon/><MoreHorizIcon/>
</div>
    </div>
  )
}

export default ChatHead