import React from 'react'
import type { User } from '../../types'

interface MessageBoardProps {
  user: User | ''
  id: string
}

const MessageBoard: React.FC<MessageBoardProps> = () => {
  return (
    <div className="message-board">
      <h1>COMING SOON</h1>
    </div>
  )
}

export default MessageBoard
