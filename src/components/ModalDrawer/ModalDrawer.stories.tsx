import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
import { BiHelpCircle } from 'react-icons/bi'
import { Button, ModalDrawer } from '..'

const meta = {
  title: 'Example/ModalDrawer',
  component: ModalDrawer,
} satisfies Meta<typeof ModalDrawer>

export default meta

 
const PlaygroundContent: StoryFn<typeof ModalDrawer> = (args) => {
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
  notHeader: true,
  icon: <BiHelpCircle />,
  children:
    ' sdifhiushdfiuh sdifhiusdf sidufhiusdfhsdiufh iusdfhiusdf  jsdfjh skdjfhjksd sdkfjksd sdkjfhkjsd sdkjkjsd kjsdfkj sdkjfhkjsdf skdjhf ksdhkj  kjsdfkj kjshdf ',
  subTitle: 'Teste subtitle',
  action: () => (
    <Button size="small" color="primary">
      Salvar
    </Button>
  ),
}
