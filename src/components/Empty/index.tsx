import Lottie from 'react-lottie'
import { Text } from '../Text'
import * as Style from './styles'

import { data as notData } from './animations/notData.js'
import { data as notPage } from './animations/notPage.js'

export type EmptyProps = {
  title?: string
  subTitle?: string
  alertType?: 'notPage' | 'notData'
  height?: number | string
  width?: number | string
  asLink?: string
  linkText?: string
}

const SelectAnimation = (animation: string) => {
  if (animation === 'notPage') {
    return notPage
  }
  return notData
}

const Empty = ({
  title = 'Pagina não encontrada',
  subTitle,
  alertType = 'notData',
  height = 250,
  width = 200,
  asLink = '#',
  linkText = '',
}: EmptyProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SelectAnimation(alertType),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Style.Container>
      <Style.ContainerEmpty>
        <Lottie options={defaultOptions} height={height} width={width} />
        <Text size="p2" color="default" bold element="p">
          {title}
        </Text>
        <Text size="p2" color="default" element="p">
          {!!subTitle && subTitle}
          {!!linkText && (
            <a href={asLink} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          )}
        </Text>
      </Style.ContainerEmpty>
    </Style.Container>
  )
}

export default Empty
