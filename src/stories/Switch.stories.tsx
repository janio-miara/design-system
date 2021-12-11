import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Switch } from '../components'

export default {
  title: 'Example/Switch ',
  component: Switch,
} as ComponentMeta<typeof Switch | any>

const PlaygroundContent: ComponentStory<typeof Switch> = () => {
  const [state, setState] = useState(false)
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Switch checked={state} onChange={(data: any) => setState(data)} color="success" />
    </div>
  )
}
export const Playground: any = PlaygroundContent.bind({})
