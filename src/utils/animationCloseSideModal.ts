import { ModalDrawerProps } from '../types/ModalDrawerTypes'

const keyframes: any = {
  right: [
    {
      opacity: 1,
      right: '0px',
    },
    {
      opacity: 0,
      right: '-500px',
    },
  ],
  left: [
    {
      opacity: 1,
      left: '0px',
    },
    {
      opacity: 0,
      left: '-500px',
    },
  ],
}

export const animationCloseSideModal = (element: HTMLElement, side: ModalDrawerProps['side']) => {
  const animationDuration = 1000
  if (side) element.animate(keyframes[side], animationDuration)
  return new Promise(resolve => setTimeout(resolve, animationDuration))
}
