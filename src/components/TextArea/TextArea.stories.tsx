import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react-vite'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { TextArea } from '../TextArea'

const meta = {
  title: 'TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>

export default meta

export const TextAreaComponent: StoryFn<typeof TextArea> = () => {
  const [inputValue, setInputValue] = React.useState('')
  const handleValues = (target: EventTarget & HTMLTextAreaElement) => {
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
        icon={faBell as unknown as React.ReactNode}
        name="Name"
        placeholder="Wavecode..."
        value={inputValue}
        onChange={handleValues}
        validate
        message="Texto deve conter mais de 5 caracteres"
      />
    </div>
  )
}
