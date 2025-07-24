
import * as Style from './styles'
import { BadgeWordProps } from '../../types/BaggeWordTypes'

export const BadgeWords = (props: BadgeWordProps) => {
  const { text, onClose } = props
  return (
    <Style.Container {...props}>
      {text}
      {onClose && (
        <button type="button" onClick={() => onClose(text)}>
          x
        </button>
      )}
    </Style.Container>
  )
}
