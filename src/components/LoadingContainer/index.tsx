import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Text } from '../Text'
import * as Styles from './styles'

export type propsLoading = {
  loading: boolean
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark'
}

const LoadingContainer = ({ loading, color = 'primary' }: propsLoading) => {
  return (
    loading && (
      <Styles.Container color={color}>
        <AiOutlineLoading3Quarters />
        <Text size="p3">CARREGANDO...</Text>
      </Styles.Container>
    )
  )
}

export default LoadingContainer
