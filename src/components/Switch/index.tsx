import React from 'react'
import * as Style from './styles'
import { colorTypes } from '../../types/colorTypes'

interface PropsSwitch {
  checked: boolean
  onChange: any
  color?: colorTypes
}

export const Switch = ({ checked, onChange, color }: PropsSwitch) => {
  return (
    <Style.Container color={color}>
      <input checked={checked} type="checkbox" onChange={data => onChange(data.target.checked)} />
      <span className="slider round" />
    </Style.Container>
  )
}
