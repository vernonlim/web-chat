import { CSSProperties, useEffect, useRef } from 'react'
import MessageBox from './MessageBox'

interface Message {
    message_id: string,
    channel_id: string,
    user_id: string,
    content: string,
    message_time: string,
}

export interface MessageListProps {
  messages: Message[] | undefined;
}

export default function MessageList(props: MessageListProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (props.messages?.length) {
      ref.current?.scrollIntoView({
        behavior: "instant",
        block: "end",
      })
    }
  }, [props.messages])

  const styles: Record<string, CSSProperties> = {
    messagelist: {
      borderStyle: 'dotted',
      borderColor: 'blue',
      flex: 1,
      overflowY: 'scroll',
    }
  }
  
  return (
    <div style={styles.messagelist}>
      <ListOrNothing messages={props.messages}/>
      <div ref={ref}/>
    </div>
  )
}

function ListOrNothing(props: MessageListProps) {
  if (!props.messages) return <p>nothing</p>

  return <ol> {props.messages.map((el) => <MessageBox key={el.message_id} content={el.content}/>)} </ol>
}
