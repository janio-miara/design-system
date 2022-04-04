import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { InputMultiSelect } from '../components'

export default {
  title: 'Example/InputMultiSelect ',
  component: InputMultiSelect,
} as ComponentMeta<typeof InputMultiSelect>

const InputSelectContent: ComponentStory<typeof InputMultiSelect> = () => {
  const object = [
    {
      id: 1,
      check: false,
      value: 'Janio',
      sobrenome: 'Miara Tadeu Ribeiro Fernando Suares',
    },
    { id: 2, check: false, value: 'Marcelo', sobrenome: 'Ribeiro' },
    { id: 3, check: true, value: 'Joao', sobrenome: 'Martins' },
  ]

  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <InputMultiSelect
        keyValue="sobrenome"
        object={object}
        defaultValue={[3]}
        onChange={(e: any) => console.log(e)}
        icon={faUser}
        id="name"
        label="Primeiro Nome"
        variant="medium"
        placeholder="Primeiro nome"
      />
    </div>
  )
}
export const InputSelectContentPlay = InputSelectContent.bind({})
