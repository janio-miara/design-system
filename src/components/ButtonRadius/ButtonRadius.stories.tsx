import { StoryFn, Meta } from '@storybook/react-vite'
import { RiUserFill } from 'react-icons/ri'

import { ButtonRadius } from '.'
import { JSX } from 'react/jsx-runtime'
import { ButtonRadiusProps } from '../../types/buttonTypes'

const meta = {
  title: 'Components/Buttons/ButtonRadius',
  component: ButtonRadius,
} satisfies Meta<typeof ButtonRadius>

export default meta

const PlaygroundContent: StoryFn<typeof ButtonRadius> = (args: JSX.IntrinsicAttributes & ButtonRadiusProps) => {
  return <ButtonRadius color="primary" {...args} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  size: 'medium',
  icon: <RiUserFill />,
  disabled: false,
}
