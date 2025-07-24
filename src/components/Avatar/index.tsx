
import * as Styles from './styles'

export interface AvatarProps {
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
    <Styles.Container>
      <Styles.Wrapper active={active}>{handleName()}</Styles.Wrapper>
    </Styles.Container>
  )
}
