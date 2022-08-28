import styled, { css, keyframes } from 'styled-components';
import { theme } from '../Themes';
export const changeSize = {
    small: css `
    padding: 8px;
    font-size: ${theme.fontSizes.p3};
  `,
    medium: css `
    padding: 12px;
    font-size: ${theme.fontSizes.p2};
  `,
    large: css `
    padding: ${theme.spacing.space3};
    font-size: ${theme.fontSizes.p3};
  `,
};
export const changeSizeMessage = {
    small: css `
    height: 20px;
    max-height: 20px;
  `,
    medium: css `
    height: 25px;
    max-height: 25px;
  `,
    large: css `
    height: 30px;
    max-height: 30px;
  `,
};
const fadeIn = keyframes `
  0% {
    height: 0;
  }
  100% {
    height: 40px;
  }
`;
export const ContainerInput = styled.div `
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.join()};
  width: 100%;
  position: relative;
  margin-bottom: ${({ error }) => (error ? theme.spacing.space2 : '0px')};
  transition: 0.5s;
  min-height: 60px;

  .wrapper-label {
    position: absolute;
    color: ${theme.colors.shade40};
    font-size: 13px;
    left: 14px;
    top: -${theme.spacing.space2};
    background: white;
    padding: 0 2px;
    line-height: ${theme.spacing.space3};
    letter-spacing: 0;
    font-weight: normal;
  }

  .wrapper-icon-close {
    position: absolute;
    right: 10px;
    top: 12px;
    transition: transform 0.3s;
    color: ${theme.colors.shade40};
    :hover {
      color: ${theme.colors.blue40};
      cursor: pointer;
      transform: scale(1.03);
    }
    border: none;
    background: transparent;
  }
  .wrapper-icon {
    position: absolute;
    transition: transform 0.3s;
    left: 0;
    top: 12px;
    padding-left: ${theme.spacing.space3};
    color: ${theme.colors.shade40};
  }
`;
export const WrapperInput = styled.input `
  margin: 0;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  border: 1px solid transparent;
  border-bottom: none;
  box-shadow: ${({ error }) => (!error ? theme.colors.shade40 : theme.colors.red40)} 0 0 0 1.2px inset;
  color: ${theme.colors.shade80};
  ${({ variant }) => (variant ? changeSize[variant] : changeSize.medium)};
  padding-left: ${({ icon }) => (icon ? '40px' : '16px')};
  padding-right: ${({ onClear }) => (onClear ? '40px' : '16px')};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue40};
    box-shadow: 0 0 2px ${theme.colors.blue40};
  }

  &:-webkit-autofill {
    border: 1px solid ${theme.colors.shade40};
    background: -internal-light-dark(black, white) !important;
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.white} inset;
  }
  &-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: white !important;
    color: -internal-light-dark(black, white) !important;
  }

  ::placeholder {
    color: ${theme.colors.shade40};
    font-weight: lighter;
  }
`;
export const WrapperMessage = styled.div `
  color: ${theme.colors.red40};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background: ${theme.colors.red20};
  width: calc(100% - 32px);
  padding: 6px 16px 0;
  animation: 1.5s ${fadeIn} ease 0s;
  opacity: ${({ error }) => (error ? '0' : '1')};
  margin: -6px 0;
  z-index: -1;
  transition: 1s;
  border-radius: 0 0 8px 8px;
  ${({ variant }) => (variant ? changeSizeMessage[variant] : changeSizeMessage.medium)};
`;
//# sourceMappingURL=styles.js.map