import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { Text } from '../Text'
import { Button } from '../Button'
import { ButtonRadius } from '../ButtonRadius'

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

export const Modal = ({ icon, actionClick, textAction, open, title, size, close, children, ...props }: ModalProps) => {
  return ReactDOM.createPortal(
    <S.FullScreen open={open}>
      <S.Container size={size || 'auto'} {...props}>
        <header>
          <div className="logo">
            {icon}
            <Text element="p" bold size="p2" color="white">
              {title}
            </Text>
          </div>
          <div className="close">
            <ButtonRadius onClick={close} size="small" icon={<FontAwesomeIcon icon={faTimes} />} />
          </div>
        </header>

        <div className="body">{children}</div>

        <footer>
          {actionClick && (
            <Button color="primary" size="small" outlined onClick={actionClick}>
              {textAction || 'Salvar'}
            </Button>
          )}
          <Button size="small" color="primary" outlined onClick={close}>
            Fechar
          </Button>
        </footer>
      </S.Container>
    </S.FullScreen>,
    document.body,
  )
}