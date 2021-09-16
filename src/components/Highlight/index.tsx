import React from 'react'
import Highlighter from 'react-highlight-words'
import * as Style from './styles'
import { colorTypes } from '../../types/colorTypes'
import { sizeText } from '../../types/sizeTypes'

export interface PropsHighlight {
  text: string
  searchWords: string[]
  color?: colorTypes
  size?: sizeText
  fontWeight?: 'bold' | 'lighter' | 'normal'
}

export const Highlight = ({ text, searchWords, color, size, fontWeight }: PropsHighlight) => {
  return (
    <Style.Container color={color} size={size} fontWeight={fontWeight}>
      <Highlighter highlightClassName="highlight" searchWords={searchWords} autoEscape textToHighlight={text} />
    </Style.Container>
  )
}
