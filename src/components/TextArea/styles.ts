
import styled from 'styled-components'
import { theme } from '../Themes'

import { sizeBasic } from '../../types/sizeTypes'

interface ILabel {
  icon?: React.ReactNode | React.Component
  validate?: boolean
  autoClear?: boolean
  spacing?: string
  autocomplete?: string
  size?: sizeBasic
}

interface margin {
  margin?: string
  size?: string
}

interface size {
  size?: string
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ContainerIcon = styled.div<margin>`
  position: relative;
  left: 65px;
  z-index: 2;
  svg {
    color: ${theme.colors.shade50};
    position: absolute;
    z-index: 2;
    left: -50px;
    top: 14px;
    width: 19px;
    height: 19px;
    transition: 180ms ease-in-out;
  }
`
export const ContainerInput = styled.div<ILabel>`
  display: flex;
  height: 100%;
  -webkit-box-align: center;
`

export const WrapperTextArea = styled.textarea<ILabel>`
  width: 100%;
  min-width: 65px;
  height: 100%;
  border: none;
  background: rgb(250, 250, 251);
  box-shadow: rgb(229 231 235) 0px 0px 0px 1.2px inset;
  border: ${({ validate }) => !validate && `1px solid ${theme.colors.red30}`};
  border-radius: 8px;
  padding: 16px;
  padding-right: ${({ autoClear }) => (autoClear ? '40px' : '12px')};
  color: ${({ validate }) => (validate ? theme.colors.shade80 : theme.colors.red40)};
  font-size: ${theme.fontSizes.p2};
  transition: 180ms ease-in-out;

  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f5f5f5 inset;
    box-shadow: 0 0 30px #f5f5f5 inset;
    font-weight: 500;
  }

  &:focus {
    box-shadow: inset 0 0 0 1.5px ${({ validate }) => (validate ? '#1b38a5' : theme.colors.red30)};
    color: ${({ validate }) => (validate ? theme.colors.shade80 : theme.colors.red30)};
    background: ${theme.colors.white};

    ~ svg {
      color: ${({ validate }) => (validate ? theme.colors.cyan40 : theme.colors.red30)};
    }
  }
`
export const LabelContainer = styled.span`
  position: absolute;
  display: inline-flex;
  -webkit-box-align: center;
  top: -16px;
  align-items: center;
`

export const WrapperLabel = styled.label<ILabel>`
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  font-weight: normal;
  color: rgb(114, 119, 128);
  text-transform: none;
  top: ${theme.spacing.space2};
  left: 8px;
  z-index: 2;
  position: relative;
  padding: 0 ${theme.spacing.space2};
  width: auto;
  white-space: nowrap;
  background: linear-gradient(transparent 43%, rgb(250, 250, 251) 43%, rgb(250, 250, 251) 100%);
`

export const CleanInput = styled.div<size>`
  position: relative;
  right: 13px;
  top: 50%;
`

export const WrapperCleanInput = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Message = styled.div`
  margin-top: 3px;
  width: 100%;
  font-size: ${theme.fontSizes.p0};
  color: ${theme.colors.red30};
`
