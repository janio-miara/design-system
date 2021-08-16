import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '../components'

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const PlaygroundContent: ComponentStory<typeof Text> = args => {
  return <Text {...args} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  element: 'p',
  children: 'Texto Janio',
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
}
