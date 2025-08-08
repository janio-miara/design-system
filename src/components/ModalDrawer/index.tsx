import { useRef, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import Button from '../Button'
import { Text } from '../Text'
import * as Style from './styles'

import { animationCloseSideModal } from '../../utils/animationCloseSideModal'
export interface ModalDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  close?: () => void
  action?: React.ReactNode
  title: string
  subTitle?: string
  icon?: React.ReactNode
  notHeader?: boolean
  side?: 'left' | 'right'
  footer?: boolean
  refScroll?: React.RefObject<HTMLDivElement>
}

export const ModalDrawer = ({
  open,
  close,
  title,
  subTitle,
  icon,
  action,
  notHeader,
  side,
  refScroll,
  footer,
  children,
  ...props
}: PropsWithChildren<ModalDrawerProps>) => {
  const ref = useRef<HTMLDivElement>(null)

  const closeModal = async () => {
    if (!ref.current) return
    await animationCloseSideModal(ref.current, side)
    if (close) close()
  }
  useOnClickOutside(ref, closeModal)

  return open
    ? ReactDOM.createPortal(
        <Style.Container {...props}>
          <Style.ContainerFilter ref={ref} side={side || 'right'} {...props}>
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
            { footer !== false &&
              <div className="button-wrapp">
                {action}
                <Button size="small" minimal color="primary" onClick={closeModal}>
                  Fechar
                </Button>
              </div>
            }
          </Style.ContainerFilter>
        </Style.Container>,
        document.body,
      )
    : null
}
