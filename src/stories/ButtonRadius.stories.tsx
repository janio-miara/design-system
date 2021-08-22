import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiUserFill } from 'react-icons/all'

import { ButtonRadius } from '../components'

export default {
  title: 'Example/ButtonRadius',
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
