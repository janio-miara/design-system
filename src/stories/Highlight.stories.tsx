import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Highlight } from '../components'

export default {
  title: 'Example/Highlight',
  component: Highlight,
} as ComponentMeta<typeof Highlight | any>

const PlaygroundContent: ComponentStory<typeof Highlight> = args => {
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Highlight {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  size: 'p3',
  color: 'primary',
  searchWords: ['Prezado', 'margem'],
  text: 'Janio Vinicius Miara, margem',
}
