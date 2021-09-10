import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { Button } from '../Button'
import { Text } from '../Text'
import * as Style from './styles'
import { ModalDrawerProps } from '../../types/ModalDrawerTypes'

export const ModalDrawer: React.FC<ModalDrawerProps> = props => {
  const { open, close, title, subTitle, icon, children, action } = props
  const ref: any = useRef()

  useOnClickOutside(ref, close)

  return open
    ? ReactDOM.createPortal(
        <Style.Container {...props}>
          <div ref={ref}>
            <Style.ContainerFilter {...props}>
              <div className="wrapper-heading">
                {icon && <span className="icon">{icon}</span>}
                <div>
                  <Text element="h3" bold color="white">
                    {title}
                  </Text>
                  <Text element="span" size="p3" color="default">
                    {subTitle && subTitle}
                  </Text>
                </div>
              </div>
              <div className="content">{children}</div>
              <div className="button-wrapp">
                {action && action()}
                <Button size="small" outlined color="primary" onClick={close}>
                  Fechar
                </Button>
              </div>
            </Style.ContainerFilter>
          </div>
        </Style.Container>,
        document.body,
      )
    : null
}
