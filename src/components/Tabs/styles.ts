import styled from 'styled-components'
import { theme } from '../Themes'
import { colorTypes } from '../../types/colorTypes'
import handleColor from '../../utils/handleColor'

interface PropsTabs {
  colorActive?: colorTypes
}

export const Container = styled.div`
  display: flex;
  transition: transform 0.2s;
  cursor: pointer;
`

export const Wrapper = styled.div<PropsTabs>`
  transition: transform 0.3s;
  cursor: pointer;
  height: 100%;

  margin-right: ${theme.spacing.space3};

  .divider {
    margin-top: 4px;
    border-radius: 5px;
    animation: 0.7s ease 0s 0.7 normal scale-in-hor-center;
    height: 2px;
    background-color: ${({ colorActive }) => (colorActive ? handleColor(colorActive) : theme.colors.blue40)};
  }

  &:hover {
    cursor: pointer;
  }
  @keyframes scale-in-hor-center {
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`
