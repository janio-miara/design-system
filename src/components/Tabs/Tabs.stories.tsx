import { Meta, StoryFn } from '@storybook/react-vite'
import styled from 'styled-components'
import { Tabs } from '..'

const meta = {
  title: 'Tabs',
  component: Tabs,
  args: { onChange : () => {}, tabs: ['Tab1', 'Tab2', 'Tab3'], size: 'p0' },
} satisfies Meta<typeof Tabs>

export default meta

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background: rgb(239, 239, 239);
  padding: 50px;
`
const tabs = ['Pagina1', 'Pagina2', 'Pagina3']

export const DefaultTabs: StoryFn<typeof Tabs> = () => (
  <Wrapper>
    <Tabs tabs={tabs} onChange={() => {}} />
  </Wrapper>
)

export const CustomTabColor: StoryFn<typeof Tabs> = () => (
  <Wrapper>
    <Tabs tabs={tabs} onChange={() => {}} size="p2" colorActive="error" colorDefault="success" />
  </Wrapper>
)
