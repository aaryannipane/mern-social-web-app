import React, { useEffect } from 'react'
import "./message.css"
import { format } from 'timeago.js'

export default function Message({message, own}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={own? "message own": "message"}>
      <div className="messageTop">
        <img src={PF + "person/1.jpeg"} alt=""  className='messageImg'/>
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
