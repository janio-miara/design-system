import styled from 'styled-components'
import { theme } from '../Themes'

interface props {
  disabled?: boolean
}

export const Label = styled.label<props>`
  input {
    position: absolute;
    opacity: 0;
  }

  span {
    cursor: pointer;
    width: 14px;
    height: 14px;
    display: block;
    margin-right: 8px;
    border-radius: 2px;

    border: 1px solid ${({ disabled }) => (!disabled ? theme.colors.blue20 : theme.colors.shade30)};
    transition: background-color 0.5s ease;
    background-color: ${({ disabled }) => (!disabled ? '#fff' : theme.colors.shade10)};
  }

  input:checked + span {
    cursor: pointer;
    border-radius: 2px;
    background-color: ${({ disabled }) => (!disabled ? theme.colors.blue30 : theme.colors.shade20)};
    background-image: ${({ disabled }) =>
      !disabled &&
      "url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E\")"};
    background-position: center;
    border: none;
    padding: 1px;
  }
`
