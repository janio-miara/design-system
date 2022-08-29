import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading } from '../components'

export default {
  title: 'Components/Loaders/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

export const LoadingActive: ComponentStory<typeof Loading> = () => <Loading active />
