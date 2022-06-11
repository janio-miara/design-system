import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FaUser } from 'react-icons/fa'
import { Input } from '../components'

export default {
  title: 'Example/Input ',
  component: Input,
} as ComponentMeta<typeof Input>

const InputIconContent: ComponentStory<typeof Input> = () => {
  const [inputValue, setInputValue] = useState({ name: '' })

  const handleValues = (target: any) => {
    const { id, value } = target
    setInputValue({ ...inputValue, [id]: value })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        height: '500px',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Input
          value={inputValue.name}
          icon={<FaUser />}
          onChange={handleValues}
          id="name"
          name="Primeiro Nome"
          onClear
          placeholder="Primeiro nome"
        />
        <Input
          value={inputValue.name}
          icon={<FaUser />}
          onChange={handleValues}
          type="password"
          id="password"
          name="Password"
          onClear
          placeholder="Primeiro nome"
        />
      </div>

      <Input
        value={inputValue.name}
        onChange={handleValues}
        id="name"
        name="Primeiro Nome"
        onClear
        placeholder="Primeiro nome"
        error
        messageError="Nome Invalido"
      />
      <Input
        value={inputValue.name}
        onChange={handleValues}
        id="name"
        name="Primeiro Nome"
        onClear
        placeholder="Primeiro nome"
        error
        messageError="Nome Invalido"
      />
    </div>
  )
}
export const InputIcon = InputIconContent.bind({})

const InputIconErrorContent: ComponentStory<typeof Input> = () => {
  const [inputValue, setInputValue] = useState({ name: '' })

  const handleValues = (target: any) => {
    const { id, value } = target
    setInputValue({ ...inputValue, [id]: value })
  }

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Input
        value={inputValue.name}
        onChange={handleValues}
        icon={<FaUser />}
        type="text"
        id="name"
        name="Primeiro Nome"
        onClear
        variant="medium"
        placeholder="Primeiro nome"
        error
        messageError="Nome Invalido"
      />
    </div>
  )
}
export const InputIconError = InputIconErrorContent.bind({})
