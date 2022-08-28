import React from 'react'
import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'Pagina não encontrada',
    subTitle: 'Verifique se existem solicitações com filtro especifico',
    alertType: 'notPage',
    height: 250,
    width: 200,
  },
} as Meta

export const Default: Story<EmptyProps> = args => (
  <div style={{ width: '100%', margin: '0 auto' }}>
    <Empty {...args} />
  </div>
)
