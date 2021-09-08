import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BadgeWords } from '../components'

export default {
  title: 'Example/BadgeWords',
  component: BadgeWords,
} as ComponentMeta<typeof BadgeWords | any>

const PlaygroundContent: ComponentStory<typeof BadgeWords> = args => {
  const handleClose = (text: string) => {
    console.log(text)
  }
  return (
    <>
      <BadgeWords {...args} onClose={handleClose} />
    </>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: 'primary',
  text: 'Text Primary',
  outlined: false,
}
