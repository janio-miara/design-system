import React from 'react'
import * as Style from './styles'
import { DivisorProps } from '../../types/DivisorTypes'

export const Divisor = ({ ...props }: DivisorProps) => {
  const { orientation } = props
  console.log('orientation===.', props)
  return (
    <>
      {orientation === 'vertical' ? <Style.ContainerVertical {...props} /> : <Style.ContainerHorizontal {...props} />}
    </>
  )
}
