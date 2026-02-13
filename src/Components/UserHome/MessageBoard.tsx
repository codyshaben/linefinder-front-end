import React from 'react'
import styles from './UserHome.module.css'
import type { User } from '../../types'

interface MessageBoardProps {
  user: User | ''
  id: string
}

const MessageBoard: React.FC<MessageBoardProps> = () => {
  return (
    <div className={styles.messageBoard}>
      <h1>COMING SOON</h1>
    </div>
  )
}

export default MessageBoard
