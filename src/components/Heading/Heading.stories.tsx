import { Meta, StoryFn } from '@storybook/react-vite'

import { FiClock } from 'react-icons/fi'
import { Heading } from '..'
import { PropsHeading } from '.'

const meta = {
  title: 'Example/Heading',
  component: Heading,
} satisfies Meta<PropsHeading>

export default meta

const PlaygroundContent: StoryFn<typeof Heading> = args => {
  return <Heading {...args} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  title: 'Titulo da pagina principal',
  subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  icon: <FiClock />,
}
