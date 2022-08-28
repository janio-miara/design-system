import React from 'react'
import { Story, Meta } from '@storybook/react'

import Paginate, { PropsPaginate } from '.'

export default {
  title: 'Components/Paginate',
  component: Paginate,
  args: {
    startPage: 1,
    pageCount: 100,
  },
} as unknown as Meta<PropsPaginate>

export const Default: Story<PropsPaginate> = args => <Paginate {...args} />
