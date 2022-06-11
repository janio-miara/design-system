import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiClock } from 'react-icons/fi'
import { Heading } from '../components'

export default {
  title: 'Example/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading | any>

const PlaygroundContent: ComponentStory<typeof Heading> = args => {
  return <Heading {...args} />
}
export const Playground: any = PlaygroundContent.bind({})

Playground.args = {
  title: 'Titulo da pagina principal',
  subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  icon: <FiClock />,
}
