import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { RiUserFill } from 'react-icons/ri'
import { InputSelect } from '../components'
import logo from '../assets/logoBrasil.jpeg'

export default {
  title: 'Example/InputSelect ',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>

const InputSelectContent: ComponentStory<typeof InputSelect> = () => {
  const [inputValue, setInputValue] = useState({ id: 3, value: 'Joao', sobrenome: 'Martins' })

  const object = [
    { id: 1, value: 'Janio', sobrenome: 'Miara Tadeu Ribeiro Fernando Suares', icon: <RiUserFill />, image: logo },
    { id: 2, value: 'Marcelo', sobrenome: 'Ribeiro' },
    { id: 3, value: 'Joao', sobrenome: 'Martins', icon: <RiUserFill />, image: logo },
  ]

  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
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
  )
}
export const InputSelects = InputSelectContent.bind({})
