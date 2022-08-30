import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FiLayers } from 'react-icons/fi'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    minimal: false,
    loading: false,
    variant: 'success',
  },
  argTypes: {
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
      type: '',
    },
  },
} as unknown as Meta<ButtonProps>

export const Default: Story<ButtonProps> = args => <Button {...args} />

Default.args = {
  children: 'Solicitar',
}

export const withIcon: Story<ButtonProps> = args => <Button {...args} />

withIcon.args = {
  children: 'Cotação',
  icon: <FiLayers />,
}

export const asLink: Story<ButtonProps> = args => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Solicitar',
  as: 'a',
  href: '/link',
}

export const isDisabled: Story<ButtonProps> = args => <Button {...args} />

isDisabled.args = {
  children: 'Solicitar',
  disable: true,
}
