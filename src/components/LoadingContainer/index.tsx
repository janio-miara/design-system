import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Text } from '../Text'
import * as Styles from './styles'

export interface LoadingContainerProps {
  loading: boolean
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark'
}

export function LoadingContainer({ loading, color = 'primary' }: LoadingContainerProps) {
  return (
    loading && (
      <Styles.Container $color={color}>
        <AiOutlineLoading3Quarters />
        <Text size="p3">CARREGANDO...</Text>
      </Styles.Container>
    )
  )
}
