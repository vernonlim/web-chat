import { CSSProperties } from 'react'
import MessageBox from './MessageBox'

export interface MessageListProps {
  messages: string[] | undefined;
}

export default function MessageList(props: MessageListProps) {
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
    </div>
  )
}

function ListOrNothing(props: MessageListProps) {
  if (!props.messages) return <p>nothing</p>

  return <ol> {props.messages.map((el, index) => <MessageBox key={index} content={el}/>)} </ol>
}
