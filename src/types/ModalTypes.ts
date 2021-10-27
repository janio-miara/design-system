export interface ModalProps {
  open: boolean
  title?: string
  size?: 'small' | 'medium' | 'large' | 'auto'
  close: () => void
  textAction?: string
  actionClick?: () => void
  icon?: any
  children?: any
}
