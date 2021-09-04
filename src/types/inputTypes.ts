import { sizeBasic } from './sizeTypes'

export interface InputProps {
  id?: string
  variant?: sizeBasic
  value: string | number
  placeholder?: string
  name?: string
  icon?: any
  onClear?: boolean
  onChange: (text: any) => any
  error?: boolean
  messageError?: string
}

export interface InputPropsSelect {
  id?: string
  variant?: sizeBasic
  placeholder?: string
  name?: string
  icon?: any
  onClear?: boolean
  onChange?: (text: any) => any
  object?: any
  defaultValue?: any
  keyValue?: any
}
