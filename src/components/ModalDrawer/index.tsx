import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { Button } from '../Button'
import { Text } from '../Text'
import * as Style from './styles'
import { ModalDrawerProps } from '../../types/ModalDrawerTypes'

import { animationCloseSideModal } from '../../utils/animationCloseSideModal'

export function ModalDrawer(props: any) {
  const { open, close, title, subTitle, icon, children, action, notHeader, side, refScroll } = props
  const ref: any = useRef()

  const closeModal = async () => {
    await animationCloseSideModal(ref.current, side)
    if (close) close()
  }
  useOnClickOutside(ref, closeModal)

  return open
    ? ReactDOM.createPortal(
        <Style.Container {...props}>
          <Style.ContainerFilter {...props} ref={ref}>
            {!notHeader ? (
              <>
                <div className="wrapper-heading">
                  {icon && <span className="icon">{icon}</span>}
                  <div>
                    <Text element="h3" bold color="white">
                      {title}
                    </Text>
                    <Text element="span" size="p3" color="white">
                      {subTitle && subTitle}
                    </Text>
                  </div>
                </div>
                <div className="content" ref={refScroll}>
                  {children}
                </div>
              </>
            ) : (
              <div className="content-not-header" ref={refScroll}>
                {children}
              </div>
            )}

            <div className="button-wrapp">
              {action && action()}
              <Button size="small" outlined color="primary" onClick={closeModal}>
                Fechar
              </Button>
            </div>
          </Style.ContainerFilter>
        </Style.Container>,
        document.body,
      )
    : null
}
