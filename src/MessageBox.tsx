import { CSSProperties } from "react"

export interface MessageBoxProps {
  content: string;
}

export default function MessageBox(props: MessageBoxProps) {
  const styles: Record<string, CSSProperties> = {
    messagebox: {
      width: "90%",
      borderStyle: 'solid',
    }
  }

  return (
    <div style={styles.messagebox}>
      <p>{props.content}</p>
    </div>
  )
}

