import styled from 'styled-components'
import { theme } from '../Themes'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${theme.zIndex.z9};
  background-color: rgba(0, 0, 0, 0.7);
`
export const Container = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: 50%;
  transform: translate(-50%, -50%);
  padding: ${theme.spacing.space3};

  svg {
    margin: ${theme.spacing.space3};
  }
`
