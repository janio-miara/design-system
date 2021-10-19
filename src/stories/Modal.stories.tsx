import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { Button, Modal } from '../components'

export default {
  title: 'Example/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal | any>

const PlaygroundCont: ComponentStory<typeof Modal> = args => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open side filter</Button>
      <Modal {...args} open={open} close={() => setOpen(false)} />
    </>
  )
}
export const Playground = PlaygroundCont.bind({})

Playground.args = {
  title: 'Modal Title',
  open: true,
  icon: <BiHelpCircle />,
  children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas.',
  actionClick: () => (
    <Button size="small" color="primary">
      Salvar
    </Button>
  ),
}
