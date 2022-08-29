import React from 'react'
import { Story, Meta } from '@storybook/react'
import Tabela, { TableProps } from '.'

export default {
  title: 'Components/Table',
  component: Tabela,
  args: {
    ContainerVisible: true,
    loading: false,
  },
  argTypes: {
    data: {
      type: '',
    },
  },
} as unknown as Meta

export const Default: Story<TableProps> = args => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Tabela {...args} />
    </div>
  )
}

export const NoData: Story<TableProps> = args => {
  return (
    <div
      style={{
        width: '450px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tabela {...args} />
    </div>
  )
}

NoData.args = {
  titleEmpty: 'Não Localizamos Nenhum Item !!!',
  subTitleEmpty: 'Pesquise novamente',
  data: {},
}
