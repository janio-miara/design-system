/* eslint-disable no-undef */
import React, { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import Lottie from 'react-lottie'
import load from './load.json'

import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  background?: 'primary' | 'secondary' | 'transparent'
  disable?: boolean
  loading?: true
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    background = 'primary',
    disable = false,
    loading = false,
    ...props
  },
  ref,
) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <S.Wrapper
      background={background}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      disabled={disable}
      {...props}
    >
      {loading && (
        <div className="animateBx">
          <Lottie options={defaultOptions} height={60} width="100%" />
        </div>
      )}
      {!loading && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
