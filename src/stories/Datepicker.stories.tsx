import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Datepicker } from '../components'

export default {
  title: 'Example/Datepicker',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker | any>

const PlaygroundContent: ComponentStory<typeof Datepicker> = args => {
  const [data, setDate] = useState<any>(new Date())
  const [endDate, setEndDate] = useState<any>(new Date())
  const [endDates, setEndDates] = useState<any>(new Date())

  useEffect(() => {
    const dataEnd = new Date(data)
    setEndDates(dataEnd)
    setEndDate(dataEnd.setDate(dataEnd.getDate() + 7))
  }, [data])

  return (
    <>
      <Datepicker
        label="Data de início"
        minDate={data}
        startDate={data}
        selected={data}
        onChange={(data: any) => {
          setDate(data)
        }}
      />
      <Datepicker
        label="Data de fim"
        loading
        startDate={data}
        minDate={data}
        selected={endDates}
        maxDate={endDate}
        onChange={(data: any) => {
          setEndDates(data)
        }}
      />
    </>
  )
}
export const Playground: any = PlaygroundContent.bind({})
