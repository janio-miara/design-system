import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { Text } from '../Text'
import { Button } from '../Button'
import { ButtonRadius } from '../ButtonRadius'

export interface Props {
  open: boolean
  title?: string
  size?: string
  close: () => void
  textAction?: string
  actionClick?: () => void
  icon?: any
  children?: any
}

export interface IFullScreen {
  open: boolean
}

export interface IContainer {
  size: string
}

export const Modal: React.FC<any> = ({
  icon,
  actionClick,
  textAction,
  open,
  title,
  size,
  close,
  children,
  ...props
}) => {
  return ReactDOM.createPortal(
    <S.FullScreen open={open}>
      <S.Container size={size || 'auto'} {...props}>
        <header>
          <div className="logo">
            <FontAwesomeIcon icon={icon || faInfoCircle} />
            <Text element="p" bold size="p3" color="white">
              {title}
            </Text>
          </div>
          <div className="close">
            <ButtonRadius onClick={close} size="small" icon={faTimes} />
          </div>
        </header>

        <div className="body">{children}</div>

        <footer>
          {actionClick && (
            <Button color="primary" size="small" onClick={actionClick}>
              {textAction || 'Salvar'}
            </Button>
          )}
          <Button size="small" color="default" onClick={close}>
            Fechar
          </Button>
        </footer>
      </S.Container>
    </S.FullScreen>,
    document.body,
  )
}
