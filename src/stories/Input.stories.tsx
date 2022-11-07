import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { FaUser } from 'react-icons/fa'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { RiUserFill } from 'react-icons/ri'
import { Input, InputSelect } from '../components'
import { InputProps } from '../types/inputTypes'

export default {
  title: 'Example/Input ',
  component: Input,
  args: {
    id: 'name',
    variant: 'small',
    placeholder: 'Nome Completo',
    name: 'full-name',
    error: true,
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

  const object = [
    { id: 1, value: 'Janio', sobrenome: 'Miara Tadeu Ribeiro Fernando Suares', icon: <RiUserFill />, image: '#' },
    { id: 2, value: 'Marcelo', sobrenome: 'Ribeiro' },
    { id: 3, value: 'Joao', sobrenome: 'Martins', icon: <RiUserFill />, image: '#' },
  ]
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
        <InputSelect
          keyValue="sobrenome"
          object={object}
          defaultValue={inputValue}
          onChange={setInputValue}
          icon={faUser}
          id="name"
          label="Primeiro Nome"
          onClear
          variant="medium"
          placeholder="Primeiro nome"
        />
      </div>
    </div>
  )
}
