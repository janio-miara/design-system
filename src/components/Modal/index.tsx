import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { Text } from '../Text'
import Button from '../Button'
import { ButtonRadius } from '../ButtonRadius'
import { ModalProps } from '../../types/ModalTypes'

export const Modal = ({
  icon,
  actionClick,
  textAction,
  open,
  title,
  size,
  close,
  children,
  offClose,
  ...props
}: ModalProps) => {
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
          {!offClose && (
            <div className="close">
              <ButtonRadius onClick={close} size="small" icon={<FontAwesomeIcon icon={faTimes as any} />} />
            </div>
          )}
        </header>

        <div className="body">{children}</div>

        <footer>
          {actionClick && (
            <Button color="primary" size="small" onClick={actionClick}>
              {textAction || 'Salvar'}
            </Button>
          )}
          {!offClose && (
            <Button size="small" color="primary" minimal onClick={close}>
              Fechar
            </Button>
          )}
        </footer>
      </S.Container>
    </S.FullScreen>,
    document.body,
  )
}
