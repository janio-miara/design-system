import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import { Tabs } from '../components'

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background: rgb(239, 239, 239);
  padding: 50px;
`
const tabs = ['Pagina1', 'Pagina2', 'Pagina3']

export const DefaultTabs: ComponentStory<typeof Tabs> = () => (
  <Wrapper>
    <Tabs tabs={tabs} onChange={tab => alert(tab)} size="p2" />
  </Wrapper>
)

export const CustomTabColor: ComponentStory<typeof Tabs> = () => (
  <Wrapper>
    <Tabs tabs={tabs} onChange={tab => alert(tab)} size="p2" colorActive="error" colorDefault="success" />
  </Wrapper>
)
