import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../components'

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox | any>

const PlaygroundContent: ComponentStory<typeof Checkbox> = args => {
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Checkbox {...args} />
      <Checkbox {...args} />
    </div>
  )
}
export const PlaygroundCheckboxs = PlaygroundContent.bind({})

PlaygroundCheckboxs.args = {
  checked: true,
}
