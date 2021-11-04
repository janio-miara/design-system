import React from 'react'
import { Text } from '..'
import { Container } from './styles'

interface PropsHeading {
  title: string
  subTitle?: string
  element?: 'h1' | 'h2' | 'h3' | 'h4'
  icon?: any
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
