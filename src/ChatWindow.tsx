import { CSSProperties, useEffect, useState } from 'react'
import MessageList from './MessageList'
import SendBox from './SendBox.tsx'
import axios from 'axios'

export default function ChatWindow() {
  const [messages, setMessages] = useState<string[]>()

  const styles: Record<string, CSSProperties> = {
    chatwindow: {
      display: 'flex',
      flexDirection: 'column',
      width: "100%",
      borderStyle: 'solid',
      borderColor: 'red',
    }
  }

  useEffect(() => {
    axios.get<string[]>("http://localhost:3001/messages/").then(response => {
        setMessages(response.data)
      }
    ).catch(e => {console.log(e)})
  }, [])
  
  return (
    <div style={styles.chatwindow}>
      <MessageList messages={messages}/>
      <SendBox/>
    </div>
  )
}

