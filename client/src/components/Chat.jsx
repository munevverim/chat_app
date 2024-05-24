import React, { useEffect } from 'react'
import { useState } from 'react';

const Chat = ({socket,username,room}) => {
  const [message,setMessage] =useState('');
  const [messageList,setMessageList] =useState([]);
  useEffect(()=>{
    socket.on('messageReturn',(data)=>{
      setMessageList({})

    })

  },[socket])


  const sendMessage=async()=>{
    const messageContent={
      username:username,
      message:message,
      room:room,
      date:new Date(Date.now).getHours()+":"+(new Date(Date.now).getMinutes())

    }
    await socket.emit('message',messageContent)
    sendMessage('')

  }

  return (
    <div className='flex items-c
    enter justify-center h-full'>
    
    <div className='w-1/3 h-[600px] bg-white relative '>
    <div className='w-full h-16 bg-gray-700 flex items-center p-3'>
    <div className='w-12 h-12 bg-white rounded-full'>

    </div>
    <div className='w-full h-[400px] overflow-y-auto'>
    <div className='w-2/3 h-12 p-3 bg-blue-600 text-white text-sm m-2 rounded-xl rounded-br-none'>
    <div>Deneme Mesajı</div>
    <div className='flex w-full justify-end text-xs'>Münevver verim 08.01.2024</div>

    </div>
    <div className='flex justify-end'>
    <div className='w-2/3 h-12 p-2 bg-green-600 text-white text-sm m-2 rounded-xl rounded-br-none'>
    <div>Deneme Mesajı</div>
    <div className='flex w-full justify-end text-xs'>Münevver verim 08.01.2024</div>

    </div>

    </div>
    

    </div>

    </div>
    <div className='absolute bottom-0 left-0 w-full'>
    <input value={message} onClick={e=>setMessage(e.target.value)} className='w-3/4 h-12 border p-3 outline-none' type='text' placeholder='message send'/>
    <button onClick={sendMessage} className='w-1/4 bg-indigo-600 text-white h-12 hover:opacity-70' >SEND</button>
    

    </div>

    </div>
      
    </div>
  )
}

export default Chat

