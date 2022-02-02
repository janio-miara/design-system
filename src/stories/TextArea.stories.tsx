import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { TextArea } from '../components'

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

export const TextAreaComponent: ComponentStory<typeof TextArea> = () => {
  const [inputValue, setInputValue] = React.useState('')
  const handleValues = (target: any) => {
    const { value } = target
    setInputValue(value)
    console.log('@@@', target, value)
  }

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        background: 'rgb(239, 239, 239)',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextArea
        size="small"
        id="name"
        autoClear
        icon={faBell}
        name="Name"
        placeholder="Wavecode..."
        value={inputValue}
        onChange={handleValues}
        validate
        mensage="Texto deve conter mais de 5 caracteres"
      />
    </div>
  )
}
