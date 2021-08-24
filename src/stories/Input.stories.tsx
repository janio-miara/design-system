import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components'

export default {
  title: 'Example/Input ',
  component: Input,
} as ComponentMeta<typeof Input>

const PlaygroundContent: ComponentStory<typeof Input> = args => {
  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <Input {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})
Playground.args = {
  variant: 'medium',
}
