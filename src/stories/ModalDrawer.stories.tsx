import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BiHelpCircle } from 'react-icons/all'
import { Button, ModalDrawer } from '../components'

export default {
  title: 'Example/ModalDrawer',
  component: ModalDrawer,
} as ComponentMeta<typeof ModalDrawer | any>

const PlaygroundContent: ComponentStory<typeof ModalDrawer> = args => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open side filter</Button>
      <ModalDrawer {...args} open={open} close={() => setOpen(false)} />
    </>
  )
}
export const Playground = PlaygroundContent.bind({})

Playground.args = {
  title: 'Modal Title',
  open: true,
  side: 'right',
  icon: <BiHelpCircle />,
  children:
    'sdifhiushdfiuh sdifhiusdf sidufhiusdfhsdiufh iusdfhiusdf  jsdfjh skdjfhjksd sdkfjksd sdkjfhkjsd sdkjkjsd kjsdfkj sdkjfhkjsdf skdjhf ksdhkj  kjsdfkj kjshdf ',
  subTitle: 'Teste subtitle',
  action: () => (
    <Button size="small" color="primary">
      Salvar
    </Button>
  ),
}
