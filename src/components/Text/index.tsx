import { PTag, H1Tag, H2Tag, H3Tag, H4Tag, SpanTag } from './styles'
import { TextPros } from '../../types/textTypes'

export const Text = ({ color, children, element, size, transform, bold, ...props }: TextPros) => {
  if (element === 'h1') {
    return (
      <H1Tag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
        {children}
      </H1Tag>
    )
  }

  if (element === 'h2') {
    return (
      <H2Tag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
        {children}
      </H2Tag>
    )
  }

  if (element === 'h3') {
    return (
      <H3Tag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
        {children}
      </H3Tag>
    )
  }

  if (element === 'h4') {
    return (
      <H4Tag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
        {children}
      </H4Tag>
    )
  }

  if (element === 'span') {
    return (
      <SpanTag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
        {children}
      </SpanTag>
    )
  }

  return (
    <PTag $color={color} $size={size} $transform={transform} $bold={bold} {...props}>
      {children}
    </PTag>
  )
}
