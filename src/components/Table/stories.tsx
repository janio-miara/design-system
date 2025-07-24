import { StoryObj, Meta } from '@storybook/react-vite'
import { Table, TableProps } from './index'

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  args: {
    ContainerVisible: true,
    loading: false,
    startPage: 1,
  },
  argTypes: {
    data: {},
  },
}

export default meta

export const Default: StoryObj<TableProps<{}>> = {
  render: (args: TableProps<{}>) => (
    <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
      <Table {...args} />
    </div>
  ),
}

export const NoData: StoryObj<TableProps<{}>> = {
  render: (args: TableProps<{}>) => (
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        height: '400px',
      }}
    >
      <Table {...args} />
    </div>
  ),
}

NoData.args = {
  titleEmpty: 'Não Localizamos Nenhum Item !!!',
  subTitleEmpty: 'Pesquise novamente',
  data: [],
}
