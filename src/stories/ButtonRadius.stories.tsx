import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiUserFill } from 'react-icons/ri'

import { ButtonRadius } from '../components'

export default {
  title: 'Components/Buttons/ButtonRadius',
  component: ButtonRadius,
} as ComponentMeta<typeof ButtonRadius>

const PlaygroundContent: ComponentStory<typeof ButtonRadius> = args => {
  return (
    <>
      <ButtonRadius color="primary" {...args} />
    </>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  size: 'medium',
  icon: <RiUserFill />,
  disabled: false,
}
