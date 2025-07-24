 
import { useMemo } from 'react'
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
const escapeRegExp = (str: string) => {
  // @ts-expect-error not standard in JavaScript
  if (typeof RegExp.escape !== 'undefined') {
    // @ts-expect-error not standard in JavaScript
    return RegExp.escape(str) // Use the built-in escape method if available
  }
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape special characters for regex
}

export const Highlight = ({ text, searchWords, color, size, fontWeight }: PropsHighlight) => {
  const slices = useMemo(() => {
    if (!text || !searchWords || searchWords.length === 0) {
      return [{ start: 0, text, lighted: false }]
    }
    const textComposition = text.normalize('NFC')
    const lighted: boolean[] = Array(text.length).fill(false)
    const textNormalized = text
      .normalize('NFD')
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, '')
    const searchWordsNormalized = searchWords.map(word =>
      word
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    )
    for (const word of searchWordsNormalized) {
      const regex = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'gi')
      let match
       
      while ((match = regex.exec(textNormalized)) !== null) {
        for (let i = match.index; i < match.index + match[0].length; i += 1) {
          lighted[i] = true
        }
      }
    }
    const slices: { start: number; text: string; lighted: boolean }[] = []
    let currentSlice = { start: 0, text: '', lighted: false }
    for (let i = 0; i < text.length; i += 1) {
      if (lighted[i] !== currentSlice.lighted) {
        if (currentSlice.text) {
          slices.push(currentSlice)
        }
        currentSlice = { start: i, text: '', lighted: lighted[i] }
      }
      currentSlice.text += textComposition[i]
    }
    if (currentSlice.text) {
      slices.push(currentSlice)
    }
    return slices
  }, [text, searchWords])

  return (
    <Style.Container color={color} size={size} fontWeight={fontWeight}>
      {slices.map(slice => (
        <span key={slice.start} className={slice.lighted ? 'highlight' : ''}>
          {slice.text}
        </span>
      ))}
    </Style.Container>
  )
}
