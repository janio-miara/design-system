import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { InputSelectOutline } from '../components'

export default {
  title: 'Example/InputSelectOutline ',
  component: InputSelectOutline,
} as ComponentMeta<typeof InputSelectOutline>

const InputSelectContent: ComponentStory<typeof InputSelectOutline> = () => {
  const [inputValue, setInputValue] = useState({ id: 3, value: 'Joao', sobrenome: 'Martins' })

  const object = [
    { id: 1, value: 'Janio', sobrenome: 'Miara Tadeu Ribeiro Fernando Suares' },
    { id: 2, value: 'Marcelo', sobrenome: 'Ribeiro' },
    { id: 3, value: 'Joao', sobrenome: 'Martins' },
  ]

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <div style={{ width: '200px', height: '500px', padding: '50px' }}>
      <InputSelectOutline
        keyValue="sobrenome"
        object={object}
        defaultValue={inputValue}
        onChange={setInputValue}
        icon={faUser}
        id="name"
        label="Primeiro Nome"
        variant="medium"
        placeholder="Primeiro nome"
      />
    </div>
  )
}
export const InputSelectOutli = InputSelectContent.bind({})
