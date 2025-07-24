
import { StoryFn, Meta } from '@storybook/react-vite'
import { Avatar } from '..'
import { AvatarProps } from '.'

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
} satisfies Meta<AvatarProps>

export default meta

const PlaygroundContent: StoryFn<typeof Avatar> = args => {
  return <Avatar {...args} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  name: 'Janio Vinicius',
  active: true,
}
