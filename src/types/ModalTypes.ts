
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  actionClick?: () => void
  textAction?: string
  open: boolean
  title?: string
  size?: 'small' | 'medium' | 'large' | 'auto'
  close: () => void
  children?: React.ReactNode
  offClose?: boolean
}