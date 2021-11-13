import { sizeBasic } from './sizeTypes'

export interface InputProps {
  id?: string
  variant?: sizeBasic
  value: string | number
  placeholder?: string
  name?: string
  icon?: any
  onClear?: boolean
  onChange: any
  error?: boolean
  type?: string
  messageError?: string
  scapingHeight?: sizeBasic
  scapingWidth?: sizeBasic
}

export interface InputPropsSelect {
  id?: string
  variant?: sizeBasic
  placeholder?: string
  label?: string
  icon?: any
  onClear?: boolean
  onChange?: any
  object?: any
  defaultValue?: any
  keyValue?: any
  height?: string
}
