import React from 'react'
import DataTable from 'react-data-table-component'
import { customStylesTable, columnsMock, dataMock } from './mock'
import * as Style from './styles'

import Empty from '../Empty'
import LoadingContainer from '../LoadingContainer'
import Paginate from '../Paginate'

export type TableProps = {
  customStyles?: any
  columns?: any
  data?: any
  ContainerVisible?: boolean
  loading?: boolean
  titleEmpty?: string
  subTitleEmpty?: string
  pageCount?: number
  startPage?: number
  changePage?: any
  height: string
}

export const Table = ({
  customStyles = customStylesTable,
  columns = columnsMock,
  data = dataMock,
  ContainerVisible = true,
  loading = false,
  titleEmpty = 'Não localizamos itens!',
  subTitleEmpty = 'SubTitle',
  pageCount = 10,
  startPage = 1,
  changePage = () => null,
  height = '400px',
  ...props
}: TableProps) => {
  return (
    <Style.Wrapper height={height}>
      <Style.Container height={height} visible={ContainerVisible}>
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
      </Style.Container>
      <Style.Paginate>
        <Paginate startPage={startPage} changePage={changePage} pageCount={pageCount} />
      </Style.Paginate>
    </Style.Wrapper>
  )
}
