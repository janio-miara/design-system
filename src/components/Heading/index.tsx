
import { Text } from '../Text'
import { Container } from './styles'

export interface PropsHeading {
  title: string
  subTitle?: string
  element?: 'h1' | 'h2' | 'h3' | 'h4'
  icon?: React.ReactNode
}

export const Heading = ({ ...props }: PropsHeading) => {
  const { title, subTitle, element, icon } = props
  return (
    <Container>
      {icon && <div className="icon">{icon}</div>}
      <div>
        <Text element={element || 'h4'} color="primary">
          {title}
        </Text>
        <Text color="lightDark">{subTitle}</Text>
      </div>
    </Container>
  )
}
