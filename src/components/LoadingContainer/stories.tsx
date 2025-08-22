import { StoryObj, Meta } from '@storybook/react-vite'

import { LoadingContainer, LoadingContainerProps } from '.'

const meta = {
  title: 'Components/Loaders/LoadingContainer',
  component: LoadingContainer,
  args: {
    color: 'primary',
    loading: true,
  },
} satisfies Meta<LoadingContainerProps>

export default meta

export const Default: StoryObj<LoadingContainerProps> = { render: args => <LoadingContainer {...args} /> }
