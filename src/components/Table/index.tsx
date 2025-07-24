import DataTable, { TableProps as  ITableProps} from 'react-data-table-component'
import { customStylesTable } from './mock'
import * as Style from './styles'

import Empty from '../Empty'
import LoadingContainer from '../LoadingContainer'

export interface TableProps<T> {
  customStyles?: typeof customStylesTable
  columns: ITableProps<T>['columns']
  data?: T[]
  ContainerVisible?: boolean
  loading?: boolean
  titleEmpty?: string
  subTitleEmpty?: string
  asLinkEmpty?: string
  linkTextEmpty?: string
  onRowClicked?: (row: T) => void
}

export const Table = <T,>({
  customStyles = customStylesTable,
  columns,
  data,
  ContainerVisible = true,
  loading = false,
  titleEmpty = 'Não localizamos itens!',
  subTitleEmpty = 'SubTitle',
  asLinkEmpty,
  linkTextEmpty,
  onRowClicked,
  ...props
}: TableProps<T>) => {
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
          data={data || []}
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
    </Style.Wrapper>
  )
}
