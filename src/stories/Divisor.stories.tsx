import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Divisor } from '../components'

export default {
  title: 'Example/Divisor ',
  component: Divisor,
} as ComponentMeta<typeof Divisor | any>

const PlaygroundContent: ComponentStory<typeof Divisor> = args => {
  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <Divisor {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: false,
  size: '1px',
  orientation: 'vertical',
}
