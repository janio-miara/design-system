import { StoryFn, Meta } from '@storybook/react-vite'
import { FiLayers } from 'react-icons/fi'

import { Button, ButtonProps } from '.'

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    minimal: false,
    loading: false,
    variant: 'success',
  },
  argTypes: {
    loading: {
      type: 'boolean',
    },
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'error', 'default', 'warning', 'white', 'dark', 'lightDark'],
      },
    },
    icon: {
      type: 'string',
    },
  },
}

export default meta

export const Default: StoryFn<ButtonProps> = args => <Button {...args} />

Default.args = {
  children: 'Solicitar',
}

export const withIcon: StoryFn<ButtonProps> = args => <Button {...args} />

withIcon.args = {
  children: 'Cotação',
  icon: <FiLayers />,
}

export const asLink: StoryFn<ButtonProps> = args => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Solicitar',
}

export const isDisabled: StoryFn<ButtonProps> = args => <Button {...args} />

isDisabled.args = {
  children: 'Solicitar',
  disable: true,
}
