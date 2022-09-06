import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Table, TableProps } from './index'

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    ContainerVisible: true,
    loading: false,
    startPage: 1,
  },
  argTypes: {
    data: {
      type: '',
    },
  },
} as unknown as Meta

export const Default: Story<TableProps> = args => {
  return (
    <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
      <Table {...args} />
    </div>
  )
}

export const NoData: Story<TableProps> = args => {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        height: '400px',
      }}
    >
      <Table {...args} />
    </div>
  )
}

NoData.args = {
  titleEmpty: 'Não Localizamos Nenhum Item !!!',
  subTitleEmpty: 'Pesquise novamente',
  data: {},
}
