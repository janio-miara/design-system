import React from 'react'
import * as S from './styles'
import TableRow from './TableRow'
import CellHeader from './TableHeader'
import { ContainerBody, ContainerHeader, Wrapper, Container } from './styles'

interface Ivalue {
  value?: string | any
  align?: string
  width?: string
  action?: () => void
  maxCaracter?: number | string
}

interface Ibody {
  id?: number | string
  values?: Array<Ivalue>
}

interface IData {
  name?: string | any
  id?: number | string
  align?: string
  width?: string
  action?: () => void
}

export interface ITable {
  header: IData[]
  body: Ibody[]
}

export const Table = ({ header, body }: ITable) => {
  return (
    <Container>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              {header.map(({ align, width, name, action, id }) => {
                return (
                  <CellHeader align={align} width={width} action={action}>
                    {name}
                  </CellHeader>
                )
              })}
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0">
          <tbody>
            {body.map(({ id, values }) => {
              return (
                <tr>
                  {values?.map(({ value, maxCaracter, align, action, width }) => {
                    return (
                      <TableRow align={align} width={width} action={action} maxCaracter={maxCaracter}>
                        {value}
                      </TableRow>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Container>
  )
}
