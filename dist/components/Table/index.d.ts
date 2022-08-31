/// <reference types="react" />
export declare type TableProps = {
  customStyles?: any
  columns?: any
  data?: any
  ContainerVisible?: boolean
  loading?: boolean
  titleEmpty?: string
  subTitleEmpty?: string
}
declare const Tabela: ({
  customStyles,
  columns,
  data,
  ContainerVisible,
  loading,
  titleEmpty,
  subTitleEmpty,
  pageCount,
  startPage,
  changePage,
  height,
  ...props
}: TableProps) => JSX.Element
export default Tabela
// # sourceMappingURL=index.d.ts.map
