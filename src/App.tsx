import Sidebar from './Sidebar.tsx'
import MessageList from './MessageList.tsx'
// import SendBox from './SendBox.tsx'
import ChatWindow from './ChatWindow.tsx'
import { CSSProperties } from 'react'
import '@csstools/normalize.css'

function App() {
  const styles: Record<string, CSSProperties> = {
    main: {
      display: 'flex',
      flexDirection: 'row',
      position: 'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      overflow: 'auto',
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      width: '5rem',
    }
  }

  return (
    <div style={styles.main}>
      <Sidebar/>
      <ChatWindow/>
    </div>
  )
}

export default App
