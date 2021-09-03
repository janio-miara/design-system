import React from 'react'
import { Container, Wrapper } from './styles'

interface AvatarProps {
  active?: boolean
  name: string
}

export const Avatar = ({ active, name }: AvatarProps) => {
  const handleName = () => {
    const newName = name.split(' ')
    if (newName.length > 1) {
      return newName[0].substr(0, 1) + newName[1].substr(0, 1)
    }
    return newName[0].substr(0, 2)
  }

  return (
    <Container>
      <Wrapper active={active}>{handleName()}</Wrapper>
    </Container>
  )
}
