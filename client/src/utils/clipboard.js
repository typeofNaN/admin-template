import { Message } from 'element-ui'
import Clipboard from 'clipboard'

export default function handleClipboard (text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    Message.success({
      message: 'Copy successfully',
      duration: 1500
    })
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    Message.error('Copy failed')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
