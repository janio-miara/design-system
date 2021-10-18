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
      <Modal open={open} close={() => setOpen(false)} icon={<BiHelpCircle />} title="Modal criado by Thaynar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!
      </Modal>
    </>
  )
}
export const Playground = PlaygroundCont.bind({})

// icon,
//   actionClick,
//   textAction,
//   open,
//   title,
//   size,
//   close,
//   children,
