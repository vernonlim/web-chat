import { CSSProperties } from 'react'

export default function SendBox() {
  const styles: Record<string, CSSProperties> = {
    sendbox: {
      display: 'flex',
      flexDirection: 'row',
      borderStyle: 'dashed',
      borderColor: 'pink',
    },
  }
  
  return (
    <div style={styles.sendbox}>
      <SendBoxText/>
      <SendButton/>
    </div>
  )
}

function SendBoxText() {
  const styles: Record<string, CSSProperties> = {
    text: {
      flexGrow: '1',
      borderStyle: 'solid',
    }
  }
  
  return (
    <div style={styles.text}><p>test</p></div>
  )
}

function SendButton() {
  return (
    <p>SendLogo</p>
  )
}

