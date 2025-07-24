
import { StoryFn, Meta } from '@storybook/react-vite'
import { Card } from '..'

const meta = {
  title: 'Example/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta

const PlaygroundContent: StoryFn<typeof Card> = args => {
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Card {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: 'white',
  height: '200px',
  children: 'Height 200px',
  effect: true,
}
