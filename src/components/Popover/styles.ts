import styled from 'styled-components'
import { theme } from '../Themes'

export const Container = styled.div`
  font-family: ${theme.fonts.join()};
  box-shadow: rgb(114 119 128 / 5%) 0 1px 0 0, rgb(114 119 128 / 5%) 0 2px 4px 0, rgb(114 119 128 / 5%) 0 4px 8px 0,
    rgb(114 119 128 / 5%) 0 8px 16px 0, rgb(114 119 128 / 5%) 0 12px 24px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 8px;
`
