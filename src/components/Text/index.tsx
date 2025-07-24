
import * as Style from './styles'
import { TextPros } from '../../types/textTypes'

export const Text = ({ color, children, element, size, transform, bold, ...props }: TextPros) => {
  const handleElementP = () => {
    return <p {...props}>{children}</p>
  }
  const handleElementSpan = () => {
    return <span {...props}>{children}</span>
  }
  const handleElementH1 = () => {
    return <h1 {...props}>{children}</h1>
  }
  const handleElementH2 = () => {
    return <h2 {...props}>{children}</h2>
  }
  const handleElementH3 = () => {
    return <h3 {...props}>{children}</h3>
  }
  const handleElementH4 = () => {
    return <h4 {...props}>{children}</h4>
  }

  return (
    <Style.Container color={color} size={size} transform={transform} bold={bold}>
      {element === 'h1' && handleElementH1()}
      {element === 'h2' && handleElementH2()}
      {element === 'h3' && handleElementH3()}
      {element === 'h4' && handleElementH4()}
      {element === 'p' && handleElementP()}
      {!element && handleElementP()}
      {element === 'span' && handleElementSpan()}
    </Style.Container>
  )
}
