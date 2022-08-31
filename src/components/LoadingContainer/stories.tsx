import React from 'react'
import { Story, Meta } from '@storybook/react'

import LoadingContainer, { propsLoading } from '.'

export default {
  title: 'Components/Loaders/LoadingContainer',
  component: LoadingContainer,
  args: {
    color: 'primary',
    loading: true,
  },
} as Meta<propsLoading>

export const Default: Story<propsLoading> = args => <LoadingContainer {...args} />
