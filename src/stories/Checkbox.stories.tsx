import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../components'

export default {
  title: 'Example/Checkbox ',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox | any>

const PlaygroundContent: ComponentStory<typeof Checkbox> = () => {
  const [state, setState] = useState(false)
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Checkbox checked={state} onClick={() => setState(!state)} disabled />
    </div>
  )
}
export const Playground: any = PlaygroundContent.bind({})
