import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

import { StyledButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark'
  disable?: boolean
  loading?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  disable = false,
  loading = false,
  variant = 'primary',
  ref,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      $minimal={minimal}
      $disabled={disable}
      $variant={variant}
      ref={ref}
      {...props}
    >
      {loading && (
        <div className="animateBx">
          <BiLoaderCircle />
        </div>
      )}
      {icon}
      {!!children && <span className="text">{children}</span>}
    </StyledButton>
  )
}
