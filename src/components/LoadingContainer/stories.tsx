import { StoryObj, Meta } from '@storybook/react-vite'

import LoadingContainer, { propsLoading } from '.'

const meta = {
  title: 'Components/Loaders/LoadingContainer',
  component: LoadingContainer,
  args: {
    color: 'primary',
    loading: true,
  },
} satisfies Meta<propsLoading>

export default meta

export const Default: StoryObj<propsLoading> = { render: args => <LoadingContainer {...args} /> }
