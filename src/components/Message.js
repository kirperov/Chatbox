import React, { Component } from 'react'

const Message = ({pseudo, message, isUser}) => {
    //If pseudo is not user, show in the left
    if(isUser(pseudo)) {
        return (
            <p className="user-message">
                {message}
            </p>
         )
    } else {
        return (
            <p className="not-user-message">
            <strong>{pseudo}</strong> :{message}
            </p>
         )
    }

}

export default Message