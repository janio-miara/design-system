import styled, { css, keyframes } from 'styled-components';
import { theme } from '../Themes';
const wrapperModifiers = {
    small: () => css `
    font-size: 1.2rem;
    padding: 5px 20px;
  `,
    medium: () => css `
    font-size: 1.2rem;
    padding: ${theme.spacing.space2} ${theme.spacing.space4};
  `,
    large: () => css `
    font-size: 1.2rem;
    padding: ${theme.spacing.space2} ${theme.spacing.space5};
  `,
    fullWidth: () => css `
    width: 100%;
  `,
    withIcon: () => css `
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 8px;
      }
    }
  `,
    minimal: () => css `
    background: none;
    color: red;

    &:hover {
      color: red;
    }
  `,
    disabled: () => css `
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};
const fadeIn = keyframes `
  0% {
    height: 0;
    margin-top: 0px;
    opacity: 0;
  }
  100% {
    height: 40px;
    margin-top: -20px;
  }
`;
export const Wrapper = styled.button `
  ${({ size, fullWidth, hasIcon, minimal, disabled, background }) => css `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${theme.colors[background]};
    color: white;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.spacing.space2};
    padding: ${theme.spacing.space2};
    text-decoration: none;
    overflow: hidden;

    &:focus {
      box-shadow: 0 0 0 3px blue;
    }

    &:hover {
      background: ${minimal ? 'none' : theme.colors.secondary};
    }

    .span {
      margin-top: 5px;
    }

    .animateBx {
      max-height: 40px;
      max-width: 60px;
      margin-top: -20px;
      animation: 0.8s ${fadeIn} ease 0s;
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${!!minimal && wrapperModifiers.minimal()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;
//# sourceMappingURL=styles.js.map