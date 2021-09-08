import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from '../components'

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card | any>

const PlaygroundContent: ComponentStory<typeof Card> = args => {
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Card {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: 'white',
  height: '200px',
  children: 'Height 200px',
  effect: true,
}
