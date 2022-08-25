import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { FaUser } from 'react-icons/fa'
import { Input } from '../components'
import { InputProps } from '../types/inputTypes'

export default {
  title: 'Example/Input ',
  component: Input,
  args: {
    id: 'name',
    variant: 'small',
    placeholder: 'Nome Completo',
    name: 'full-name',
    error: false,
    type: 'text',
    messageError: 'Digita direito',
    value: '',
    icon: <FaUser />,
  },
  argTypes: {
    icon: {
      type: 'symbol',
    },
  },
} as Meta<InputProps>

export const Default: Story<InputProps> = args => {
  const [inputValue, setInputValue] = useState({ name: '' })

  const handleValues = (target: any) => {
    const { id, value } = target
    setInputValue({ ...inputValue, [id]: value })
  }
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div style={{ width: '250px' }}>
        <Input {...args} value={inputValue.name} onChange={handleValues} />
      </div>
    </div>
  )
}
