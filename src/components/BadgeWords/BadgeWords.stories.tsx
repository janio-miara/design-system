
import { StoryFn, Meta } from '@storybook/react-vite'
import { BadgeWords } from '..'

const meta = {
  title: 'Example/BadgeWords',
  component: BadgeWords,
} satisfies Meta<typeof BadgeWords>

export default meta

const PlaygroundContent: StoryFn<typeof BadgeWords> = args => {
  const handleClose = (text: string) => {
    console.log(text)
  }
  return <BadgeWords {...args} onClose={handleClose} />
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: 'primary',
  text: 'Text Primary',
  outlined: false,
}
