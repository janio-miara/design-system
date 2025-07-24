import { StoryObj, Meta } from '@storybook/react-vite'
import Empty, { EmptyProps } from '.'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  args: {
    title: 'Pagina não encontrada',
    subTitle: 'Verifique se existem solicitações com filtro especifico',
    alertType: 'notPage',
    height: 250,
    width: 200,
    asLink: '#',
    linkText: 'Link Novo',
  },
} satisfies Meta<EmptyProps>

export default meta

export const Default: StoryObj<EmptyProps> = {
  render: args => (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Empty {...args} />
    </div>
  ),
}
