import React from 'react'
import Lottie from 'react-lottie'
import { Text } from '../Text'
import * as Style from './styles'

import notData from './animations/notData.json'
import notPage from './animations/notPage.json'

export type EmptyProps = {
  title?: string
  subTitle?: string
  alertType?: 'notPage' | 'notData'
  height?: number
  width?: number
}

const SelectAnimation = (animation: string) => {
  if (animation === 'notData') {
    return notData
  }
  return notPage
}

const Empty = ({
  title = 'Pagina não encontrada',
  subTitle = 'Outro ',
  alertType = 'notData',
  height = 250,
  width = 200,
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
          {subTitle}
        </Text>
      </Style.ContainerEmpty>
    </Style.Container>
  )
}

export default Empty