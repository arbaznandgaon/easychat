import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Card from './Card';

function ContactList({user,logout, ...props}) {
  const arr=[{name : "Arbaz", msg : "Hey",time:"05:00", img : 'https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8'},
 { name :"Arfat", msg :"Hey",time:"01:00", img :'https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8'},
 { name:"Sumera", msg:"Hey",time:"02:00", img:'https://cdn.dribbble.com/users/899296/screenshots/16831151/media/8eaa942850a4c5b1b0e5131302488aa2.jpg?compress=1&resize=400x300'},
   {name:"Sadie", msg : "Hey",time:"03:00", img : 'https://cdn.dribbble.com/users/899296/screenshots/16831151/media/8eaa942850a4c5b1b0e5131302488aa2.jpg?compress=1&resize=400x300'},
{   name:"Farha", msg : "Hey",time:"04:00", img : 'https://cdn.dribbble.com/users/899296/screenshots/16831151/media/8eaa942850a4c5b1b0e5131302488aa2.jpg?compress=1&resize=400x300'},
  { name:"Anmol", msg : "Hey",time:"05:00", img : 'https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTipK79L4NlM4WDo9TpkCBUH_MvLq3A39D65ZzlUxwxHQ&oe=6398A702'},
{   name:"Priya", msg : "Hey",time:"06:00", img : 'https://cdn.dribbble.com/users/899296/screenshots/16831151/media/8eaa942850a4c5b1b0e5131302488aa2.jpg?compress=1&resize=400x300'},
{   name:"Ejaz", msg : "Hey",time:"07:00", img : 'https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8'},
  { name:"Misba", msg : "Hey",time:"11:00", img : 'https://pps.whatsapp.net/v/t61.24694-24/305964501_576567887595090_883276564924387164_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ8W1TI_FraJRf4gpEokzYKWh9Cr_xjEP6B8c9i_BGFEQ&oe=6398AAD6'},
  { name:"Seimen", msg : "Hey",time:"08:00", img : 'https://pps.whatsapp.net/v/t61.24694-24/305964501_576567887595090_883276564924387164_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ8W1TI_FraJRf4gpEokzYKWh9Cr_xjEP6B8c9i_BGFEQ&oe=6398AAD6'},
   {name:"Lubna", msg : "Hey",time:"09:00", img : 'https://pps.whatsapp.net/v/t61.24694-24/305964501_576567887595090_883276564924387164_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ8W1TI_FraJRf4gpEokzYKWh9Cr_xjEP6B8c9i_BGFEQ&oe=6398AAD6'},
  { name:"Nikhat", msg : "Hey",time:"10:00", img : 'https://cdn.dribbble.com/users/899296/screenshots/16831151/media/8eaa942850a4c5b1b0e5131302488aa2.jpg?compress=1&resize=400x300'},
]
 
function ABC(x){
  props.setContact(x)
}

console.log(user,logout)

  return (
  
 <div className='bg-gray-800 col-span-2'>
     <div className='text-3xl px-2 mx-auto h-12 bg-slate-700 items-center  justify-between flex'>
      <img className='rounded-full  w-10 h-10  ' src={user?.photoURL}/>
<div className='space-x-2 text-sm text-gray-300'>
<GroupsIcon/>
<ReplayIcon/>
<button onClick={()=>logout()}><PowerSettingsNewIcon/></button>
<MessageIcon/>
<MoreVertIcon/>
</div>  
     </div>
     <div className='bg-gray-800 flex justify-between h-12 border-b border-gray-500 items-center'>
     <div className='bg-gray-700 items-center rounded-sm ml-4 pl-2'>
      <SearchIcon className='text-gray-400'/>
      <input placeholder='Search or Start new Chat' className=' rounded-sm w-80 bg-transparent border-hidden'></input>
     </div>
     <FilterListIcon className='mr-2'/>
     </div>
     <div className='overflow-y-scroll mt max-h-[37rem]'>
     {
          arr.map((item,index) => <button key={index} onClick={()=> ABC(item)} className='w-full '><Card  time={item.time} name={item.name} img={item.img}  msg={item.msg} /></button>)
        }
 
 </div>
 </div>
  )
}

export default ContactList