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
  bold: true,
  lighter: false,
}

const TextContent: ComponentStory<typeof Text> = () => {
  return (
    <>
      <Text lighter>Texto Lighter</Text>
      <Text>Texto Normal</Text>
      <Text bold>Texto Bold</Text>
    </>
  )
}
export const TextContentStyle = TextContent.bind({})

const TextSize: ComponentStory<typeof Text> = () => {
  return (
    <>
      <Text size="p0">Texto Normal P0</Text>
      <Text size="p1">Texto Normal P1</Text>
      <Text size="p2">Texto Normal P2</Text>
      <Text size="p3">Texto Normal P3</Text>
      <Text size="p4">Texto Normal P4</Text>
    </>
  )
}
export const TextContentSize = TextSize.bind({})
