
import { StoryFn, Meta } from '@storybook/react-vite'
import { Divisor } from '..'

const meta = {
  title: 'Example/Divisor ',
  component: Divisor,
} satisfies Meta<typeof Divisor>

export default meta

const PlaygroundContent: StoryFn<typeof Divisor> = args => {
  return (
    <div style={{ width: '500px', height: '500px', padding: '50px' }}>
      <Divisor {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  color: 'primary',
  size: '1px',
  orientation: 'vertical',
}
