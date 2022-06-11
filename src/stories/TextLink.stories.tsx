import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiUserFill } from 'react-icons/ri'
import { TextLink } from '../components'

export default {
  title: 'Example/TextLink',
  component: TextLink,
} as ComponentMeta<typeof TextLink>

const TextLinkContent: ComponentStory<typeof TextLink> = args => {
  return <TextLink {...args} />
}
export const TextLinks = TextLinkContent.bind({})

TextLinks.args = {
  icon: <RiUserFill />,
  children: 'Texto Link',
  href: 'www.globo.com.br',
  target: '_blank',
}
