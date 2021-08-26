import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidBar } from '../components'

export default {
  title: 'Example/SidBar',
  component: SidBar,
} as ComponentMeta<typeof SidBar | any>

const PlaygroundContent: ComponentStory<typeof SidBar> = args => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'rgb(239, 239, 239)' }}>
      <SidBar />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})
