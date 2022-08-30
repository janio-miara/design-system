/* eslint-disable no-undef */
import React, { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark'
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
    disable = false,
    loading = false,
    variant = 'primary',
    ...props
  },
  ref,
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      disabled={disable}
      variant={variant}
      {...props}
    >
      {loading && (
        <div className="animateBx">
          <BiLoaderCircle />
        </div>
      )}
      {icon}
      {!!children && <span className="text">{children}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
