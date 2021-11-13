import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
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
    <div style={{ display: 'flex', width: '700px', height: '500px', padding: '50px' }}>
      <Input
        value={inputValue.name}
        icon={faUser}
        onChange={handleValues}
        scapingHeight="small"
        scapingWidth="small"
        id="name"
        name="Primeiro Nome"
        onClear
        placeholder="Primeiro nome"
      />
      <Input
        value={inputValue.name}
        icon={faUser}
        onChange={handleValues}
        scapingHeight="small"
        scapingWidth="small"
        id="name"
        name="Primeiro Nome"
        onClear
        placeholder="Primeiro nome"
      />
      <div>
        <Input
          value={inputValue.name}
          onChange={handleValues}
          scapingHeight="small"
          scapingWidth="small"
          id="name"
          name="Primeiro Nome"
          onClear
          placeholder="Primeiro nome"
        />
        <Input
          value={inputValue.name}
          onChange={handleValues}
          scapingHeight="small"
          scapingWidth="small"
          id="name"
          name="Primeiro Nome"
          onClear
          placeholder="Primeiro nome"
        />
      </div>
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
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <Input
        value={inputValue.name}
        onChange={handleValues}
        icon={faUser}
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
