import styled from 'styled-components'
import { theme } from '../Themes'

export const Label = styled.label`
  input {
    position: absolute;
    opacity: 0;
  }

  span {
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 8px;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid ${theme.colors.blue20};
    transition: background-color 0.5s ease;
  }

  input:checked + span {
    cursor: pointer;
    border-radius: 2px;
    background-color: ${theme.colors.blue30};
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center;
    border: none;
    padding: 1px;
  }
`
