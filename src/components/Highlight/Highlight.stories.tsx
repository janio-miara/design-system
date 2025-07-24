
import { StoryFn, Meta } from '@storybook/react-vite'
import { Highlight } from '..'

const meta = {
  title: 'Example/Highlight',
  component: Highlight,
} satisfies Meta<typeof Highlight>

export default meta

const PlaygroundContent: StoryFn<typeof Highlight> = args => {
  return (
    <div style={{ width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' }}>
      <Highlight {...args} />
    </div>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  size: 'p3',
  color: 'primary',
  searchWords: ['Prezado', 'margem ', 'ítem', 'Feijão'],
  text: 'Janio Vinicius Miara, margem, Feijão, ítem',
}
