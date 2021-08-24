import { sizeBasic } from './sizeTypes'

export interface IInput {
  mensagem?: string
  name?: string
  value: string
  type?: string
  color?: string
  placeholder?: string
  icon?: any
  onClickClear?: any
  autoClear?: any
  spacing?: string
  validate?: boolean | any
  // eslint-disable-next-line no-unused-vars
  onChange: (text: any) => any
  mensage?: string
  id?: string
  props?: any
  size?: sizeBasic
}

export interface InputProps {
  variant?: sizeBasic
  icon?: any
}
