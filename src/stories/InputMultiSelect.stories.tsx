import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { InputMultiSelect } from '../components'

export default {
  title: 'Example/InputMultiSelect ',
  component: InputMultiSelect,
} as ComponentMeta<typeof InputMultiSelect>

const InputSelectContent: ComponentStory<typeof InputMultiSelect> = () => {
  const [inputValue, setInputValue] = useState({ id: 3, value: 'Joao', sobrenome: 'Martins' })

  useEffect(() => {
    console.log(inputValue, inputValue)
  }, [inputValue])

  const object = [
    {
      id: 1,
      check: false,
      value: 'Janio',
      sobrenome: 'Miara Tadeu Ribeiro Fernando Suares',
    },
    { id: 2, check: true, value: 'Marcelo', sobrenome: 'Ribeiro' },
    { id: 3, check: true, value: 'Joao', sobrenome: 'Martins' },
  ]

  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <InputMultiSelect
        keyValue="sobrenome"
        object={object}
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
export const InputSelectContentPlay = InputSelectContent.bind({})
