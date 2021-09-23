import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../components'

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar | any>

const PlaygroundContent: ComponentStory<typeof Avatar> = args => {
  return <Avatar {...args} />
}
export const Playground: any = PlaygroundContent.bind({})

Playground.args = {
  name: 'Janio Vinicius',
  active: true,
}
