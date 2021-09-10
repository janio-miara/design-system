import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { InputProps } from '../../types/inputTypes'

interface status {
  status?: boolean
  ref?: any
}

export const changeSize = {
  small: css`
    padding: 10px;
    font-size: ${theme.fontSizes.p3};
  `,
  medium: css`
    padding: 14px;
    font-size: ${theme.fontSizes.p2};
  `,
  large: css`
    padding: ${theme.spacing.space3};
    font-size: ${theme.fontSizes.p2};
  `,
}

export const ContainerInput = styled.div<status>`
  font-family: ${theme.fonts.join()};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .wrapper-label {
    position: absolute;
    color: ${theme.colors.shade50};
    font-size: 13px;
    left: 14px;
    top: -${theme.spacing.space2};
    background: white;
    padding: 0 2px;
    line-height: ${theme.spacing.space3};
    letter-spacing: 0;
    font-weight: normal;
  }

  .wrapper-icon-selector {
    transition: transform 0.3s;
    right: 0;
    position: absolute;
    padding-right: ${theme.spacing.space3};
    color: ${({ status }) => (status ? theme.colors.blue40 : theme.colors.shade40)};
    :hover {
      color: ${theme.colors.blue40};
      cursor: pointer;
      transform: scale(1.03);
    }
  }
  .wrapper-icon {
    transition: transform 0.3s;
    left: 0;
    position: absolute;
    margin-top: ${({ status }) => (!status ? theme.spacing.space3 : 0)};
    padding-left: ${theme.spacing.space3};
    color: ${theme.colors.shade40};
  }

  input {
    box-shadow: ${({ status }) => (status ? theme.colors.blue40 : 'transparent')} 0 0 0 1.2px inset;
  }
`

export const WrapperInput = styled.input<InputProps>`
  cursor: pointer;
  width: 100%;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  font-weight: bold;
  border: 1px solid transparent;
  box-shadow: ${theme.colors.shade40} 0 0 0 1.2px inset;
  color: ${theme.colors.shade80};
  ${({ variant }) => (variant ? changeSize[variant] : changeSize.medium)};
  padding-left: ${({ icon }) => icon && '40px'};
  padding-right: 40px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const WrapperMessage = styled.div`
  width: 100%;
  position: relative;
  margin-top: -14px;
  color: ${theme.colors.shade50};
  font-family: ${theme.fonts.join()};
  font-size: 12px;
  padding-left: ${theme.spacing.space6};
`

export const ContainerPoper = styled.div<status>`
  display: ${({ status }) => !status && 'none'};
  position: absolute;
  top: 42px;
  width: 100%;
  z-index: 10;
`

export const ValueSelector = styled.div`
  cursor: pointer;
  font-size: ${theme.fontSizes.p3};
  margin: 0;
  border-radius: ${theme.spacing.space1};
  color: ${theme.colors.shade60};
  padding: 12px ${theme.spacing.space3};
  border-bottom: 1px solid ${theme.colors.shade20};
  :hover {
    font-weight: bold;
    background-color: ${theme.colors.cyan10};
  }
  :active {
    color: white;
    background-color: ${theme.colors.cyan20};
  }
`
