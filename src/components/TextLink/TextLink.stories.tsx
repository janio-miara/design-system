
import { StoryFn, Meta } from '@storybook/react-vite'
import { RiUserFill } from 'react-icons/ri'
import { TextLink } from '..'

const meta = {
  title: 'Example/TextLink',
  component: TextLink,
} satisfies Meta<typeof TextLink>
export default meta
const TextLinkContent: StoryFn<typeof TextLink> = args => {
  return <TextLink {...args} />
}
export const TextLinks = TextLinkContent.bind({})

TextLinks.args = {
  icon: <RiUserFill />,
  children: 'Texto Link',
  href: 'www.globo.com.br',
  target: '_blank',
}
