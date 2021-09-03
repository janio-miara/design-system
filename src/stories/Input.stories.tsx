import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../components'

export default {
  title: 'Example/Input ',
  component: Input,
} as ComponentMeta<typeof Input>

const PlaygroundContent: ComponentStory<typeof Input> = args => {
  const [inputValue, setInputValue] = useState({ name: '' })

  const handleValues = (target: any) => {
    const { id, value } = target
    setInputValue({ ...inputValue, [id]: value })
    console.log(inputValue)
  }

  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <Input
        value={inputValue.name}
        onChange={handleValues}
        icon={faUser}
        id="name"
        name="name"
        onClear
        variant="medium"
      />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})
