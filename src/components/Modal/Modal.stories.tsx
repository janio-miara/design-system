import { Meta, StoryFn } from '@storybook/react-vite'
import { useState } from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { Button, Modal } from '..'

const meta = {
  title: 'Example/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta

const PlaygroundCont: StoryFn<typeof Modal> = args => {
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
  size: 'small',
  offClose: false,
  icon: <BiHelpCircle />,
  children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas.',
  textAction: 'janio',
  actionClick: () => (
    <Button size="small" color="primary" minimal>
      Salvarddd
    </Button>
  ),
}
