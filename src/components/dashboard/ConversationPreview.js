import React from 'react'
import { Avatar } from '@material-ui/core'
import './ConversationPreview.css'

const ConversationPreview = ({ name, message }) => {
  return (
    <div className='conversationPreview'>
      <Avatar alt='match 1'>{name}</Avatar>
      <div className='snippet'>
        <h4>{name}</h4>
        <h5>{message}</h5>
      </div>
    </div>
  )
}

export default ConversationPreview
