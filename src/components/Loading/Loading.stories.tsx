import { StoryFn, Meta } from '@storybook/react-vite'
import { Loading } from '..'

const meta = {
  title: 'Components/Loaders/Loading',
  component: Loading,
} satisfies Meta<typeof Loading>

export default meta

export const LoadingActive: StoryFn<typeof Loading> = () => (
  <div style={{ height: '400px' }}>
    <Loading active />
  </div>
)
