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
  asLinkEmpty?: string
  linkTextEmpty?: string
  onRowClicked: any
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
  startPage = 0,
  changePage = () => null,
  asLinkEmpty,
  linkTextEmpty,
  onRowClicked,
  ...props
}: TableProps) => {
  return (
    <Style.Wrapper>
      <Style.Container visible={ContainerVisible}>
        <DataTable
          onRowClicked={onRowClicked}
          responsive
          customStyles={customStyles}
          className="tabela-padrao"
          striped
          pointerOnHover
          highlightOnHover
          columns={columns}
          data={data}
          noDataComponent={
            <div className="Empty">
              <Empty title={titleEmpty} subTitle={subTitleEmpty} asLink={asLinkEmpty} linkText={linkTextEmpty} />
            </div>
          }
          progressPending={loading}
          progressComponent={
            <div className="loading">
              <LoadingContainer loading={loading} />
            </div>
          }
          {...props}
        />
      </Style.Container>
      {!!startPage && (
        <Style.Paginate>
          <Paginate startPage={startPage} changePage={changePage} pageCount={pageCount} />
        </Style.Paginate>
      )}
    </Style.Wrapper>
  )
}
