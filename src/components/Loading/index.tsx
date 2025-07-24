
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from '../Text'
import { Container, Overlay } from './styles'

export interface LoadingProps {
  active: boolean
}

export const Loading = ({ active }: LoadingProps) => {
  if (!active) return null
  return (
    <span>
      {active && (
        <Overlay>
          <Container>
            <FontAwesomeIcon icon={faSpinner} size="2x" spin />
            <Text size="p3" color="default">
              CARREGANDO
            </Text>
          </Container>
        </Overlay>
      )}
    </span>
  )
}
