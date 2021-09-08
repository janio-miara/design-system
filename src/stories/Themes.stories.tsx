import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ColorPalette } from '../components'

export default {
  title: 'Example/Themes',
  component: ColorPalette,
} as ComponentMeta<typeof ColorPalette>

const PlaygroundContent: ComponentStory<typeof ColorPalette> = () => {
  return <ColorPalette />
}
export const PalleteColor = PlaygroundContent.bind({})
