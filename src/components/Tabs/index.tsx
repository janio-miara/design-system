import React, { useState } from 'react'
import * as S from './styles'
import { Text } from '../Text'
import { TabsTypes } from '../../types/tabsTypes'

export const Tabs = ({ onChange, tabs, size, colorActive, colorDefault }: TabsTypes) => {
  const [active, setActive] = useState(tabs[0])

  const handleTab = (tab: string) => {
    setActive(tab)
    if (onChange) {
      onChange(tab)
    }
  }
  return (
    <S.Container>
      {tabs.map(tab => {
        return (
          <S.Wrapper key={tab} onClick={() => handleTab(tab)} colorActive={colorActive}>
            <Text
              element="span"
              bold={active === tab}
              size={size || 'p2'}
              color={active === tab ? colorActive || 'secondary' : colorDefault || 'default'}
            >
              {tab}
            </Text>
            {active === tab && <div className="divider" />}
          </S.Wrapper>
        )
      })}
    </S.Container>
  )
}
