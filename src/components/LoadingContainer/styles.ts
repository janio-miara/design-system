import styled, { css } from 'styled-components'
import { changeColor } from '../../utils/changeColorTheme'
import { propsLoading } from '.'

type stylePropsLoading = Pick<propsLoading, 'color'>

export const Container = styled.div<stylePropsLoading>`
  ${({ color }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;

    p {
      margin: 8px;
      ${!!color && changeColor[color!]}
    }
    svg {
      ${!!color && changeColor[color!]}
      width: 50px;
      height: 50px;
      animation: normal rotate-center 1s ease-in-out infinite both;
    }

    @keyframes rotate-center {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
