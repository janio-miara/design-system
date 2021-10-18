import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiUserFill } from 'react-icons/all'

import { Button } from '../components'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const PlaygroundContent: ComponentStory<typeof Button> = args => {
  return <Button color="primary" {...args} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  size: 'medium',
  loading: false,
  children: 'Container',
  icon: <RiUserFill />,
  disabled: false,
}

const Template: ComponentStory<typeof Button> = () => {
  return (
    <>
      <Button color="primary">Color</Button>
      <Button color="secondary">Color</Button>
      <Button color="success">Color</Button>
      <Button color="warning">Color</Button>
      <Button color="error">Color</Button>
      <Button color="default">Color</Button>
    </>
  )
}

export const ButtonColor = Template.bind({})

const Templates: ComponentStory<typeof Button> = () => {
  return (
    <>
      <Button color="primary" outlined>
        Color
      </Button>
      <Button color="secondary" outlined>
        Color
      </Button>
      <Button color="success" outlined>
        Color
      </Button>
      <Button color="warning" outlined>
        Color
      </Button>
      <Button color="error" outlined>
        Color
      </Button>
      <Button color="default" outlined>
        Color
      </Button>
    </>
  )
}
export const ButtonOutlined = Templates.bind({})

const TemplateLoading: ComponentStory<typeof Button> = args => {
  return (
    <>
      <Button color="primary" {...args} />
    </>
  )
}

export const ButtonLoading = TemplateLoading.bind({})
ButtonLoading.args = {
  size: 'medium',
  loading: true,
  children: 'Container',
  disabled: false,
}

const TemplateIcon: ComponentStory<typeof Button> = args => <Button color="primary" {...args} />
export const ButtonIcon = TemplateIcon.bind({})
ButtonIcon.args = {
  size: 'medium',
  children: 'Container',
  icon: <RiUserFill />,
  disabled: false,
}

const TemplateIconLoading: ComponentStory<typeof Button> = args => <Button color="primary" {...args} />
export const ButtonIconLoading = TemplateIconLoading.bind({})
ButtonIconLoading.args = {
  size: 'medium',
  loading: true,
  children: 'Container',
  icon: <RiUserFill />,
  disabled: false,
}

const TemplateDisabled: ComponentStory<typeof Button> = args => <Button color="primary" {...args} />
export const ButtonDisabled = TemplateDisabled.bind({})
ButtonDisabled.args = {
  size: 'medium',
  children: 'Container',
  icon: <RiUserFill />,
  disabled: true,
}
