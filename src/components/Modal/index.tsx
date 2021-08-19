import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'
import { Text } from '../Text'
import { Button } from '../Button'
import { ButtonRadius } from '../ButtonRadius'
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

interface Props {
  open: boolean
  title?: string
  size?: string
  close: () => void
  textAction?: string
  actionClick?: () => void
  icon: any
}

export interface IFullScreen {
  open: boolean
}

export interface IContainer {
  size: string
}

// @ts-ignore
export const Modal: React.FC<Props> = ({
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
            <Text element="p" bold size="t3" color="white">
              {title}
            </Text>
          </div>
          <div className="close">
            <ButtonRadius onClick={close} size="small" icon={faTimes} variant="outlined" />
          </div>
        </header>

        <div className="body">{children}</div>

        <footer>
          {actionClick && (
            <Button color="primary" size="small" onClick={actionClick}>
              {textAction || 'Salvar'}
            </Button>
          )}
          <Button outlined size="small" color="primary" onClick={close}>
            Fechar
          </Button>
        </footer>
      </S.Container>
    </S.FullScreen>,
    document.body,
  )
}
