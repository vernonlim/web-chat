import { CSSProperties } from "react"

export default function Sidebar() {
  const styles: Record<string, CSSProperties> = {
    sidebar: {
      width: '10rem',
      borderStyle: 'solid',
    }
  }

  return (
    <div style={styles.sidebar}>
      <p>Sidebar</p>
    </div>
  )
}

