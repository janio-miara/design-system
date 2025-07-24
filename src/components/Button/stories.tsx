import { StoryFn, Meta } from '@storybook/react-vite'
import { FiLayers } from 'react-icons/fi'

import Button, { ButtonPropsType } from '.'

const meta: Meta<ButtonPropsType> = {
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

export const Default: StoryFn<ButtonPropsType> = args => <Button {...args} />

Default.args = {
  children: 'Solicitar',
}

export const withIcon: StoryFn<ButtonPropsType> = args => <Button {...args} />

withIcon.args = {
  children: 'Cotação',
  icon: <FiLayers />,
}

export const asLink: StoryFn<ButtonPropsType> = args => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Solicitar',
  as: 'a',
  href: '/link',
}

export const isDisabled: StoryFn<ButtonPropsType> = args => <Button {...args} />

isDisabled.args = {
  children: 'Solicitar',
  disable: true,
}
