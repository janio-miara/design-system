import React from 'react'
import DataTable from 'react-data-table-component'
import { customStylesTable, columnsMock, dataMock } from './mock'
import { Container } from './styles'

import Empty from '../Empty'
import LoadingContainer from '../LoadingContainer'

export type TableProps = {
  customStyles?: any
  columns?: any
  data?: any
  ContainerVisible?: boolean
  loading?: boolean
  titleEmpty?: string
  subTitleEmpty?: string
}

export const Tabela = ({
  customStyles = customStylesTable,
  columns = columnsMock,
  data = dataMock,
  ContainerVisible = true,
  loading = false,
  titleEmpty = 'Não localizamos itens!',
  subTitleEmpty = 'SubTitle',
  ...props
}: TableProps) => {
  return (
    <Container visible={ContainerVisible}>
      <DataTable
        {...props}
        customStyles={customStyles}
        className="tabela-padrao"
        striped
        pointerOnHover
        highlightOnHover
        columns={columns}
        data={data}
        noDataComponent={
          <div className="Empty">
            <Empty title={titleEmpty} subTitle={subTitleEmpty} />
          </div>
        }
        progressPending={loading}
        progressComponent={
          <div className="loading">
            <LoadingContainer loading={loading} />
          </div>
        }
      />
    </Container>
  )
}
