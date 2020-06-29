import React, { Component } from 'react'

const Message = ({pseudo, message}) => {
    return (
      
       
       <p className="user-message">
        <p>{pseudo}</p>
           {message}
       </p>
    )
}

export default Message