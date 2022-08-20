import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import DatePicker, { registerLocale } from 'react-datepicker'
// eslint-disable-next-line import/no-extraneous-dependencies
import { pt } from 'date-fns/locale'
import * as Style from './styles'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt', pt as any)
export const Datepicker = ({ width, label, ...props }: any) => {
  return (
    <Style.Container width={width}>
      <div className="wrapper-label">{label}</div>
      <DatePicker locale="pt" dateFormat="dd/MM/yyyy" {...props} />
      <button type="button" className="icon">
        <AiOutlineCalendar />
      </button>
    </Style.Container>
  )
}
