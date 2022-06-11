import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from '../Text'
import { Container, Overlay } from './styles'

export interface LoadingProps {
  active: boolean
}

export function Loading({ active }: LoadingProps) {
  if (!active) return null
  return (
    <span>
      {active && (
        <Overlay>
          <Container>
            <FontAwesomeIcon icon={faSpinner as any} size="2x" spin />
            <Text size="p3" color="default">
              CARREGANDO
            </Text>
          </Container>
        </Overlay>
      )}
    </span>
  )
}
