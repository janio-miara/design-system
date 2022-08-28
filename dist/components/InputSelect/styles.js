import styled, { css } from 'styled-components';
import { theme } from '../Themes';
export const changeSize = {
    small: css `
    padding: 10px;
    font-size: ${theme.fontSizes.p3};
  `,
    medium: css `
    padding: 14px;
    font-size: ${theme.fontSizes.p2};
  `,
    large: css `
    padding: ${theme.spacing.space3};
    font-size: ${theme.fontSizes.p2};
  `,
};
export const ContainerInput = styled.div `
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
    transition: transform 0.5s;
    right: 0;
    position: absolute;
    padding-right: ${theme.spacing.space3};
    color: ${({ status }) => (status ? theme.colors.blue40 : theme.colors.shade40)};
    transform: ${({ status }) => (status ? 'rotateX(160deg);' : 'none')};
    :hover {
      color: ${theme.colors.blue40};
      cursor: pointer;
    }
  }
  .wrapper-icon {
    transition: transform 0.3s;
    left: 0;
    position: absolute;
    padding-left: ${theme.spacing.space3};
    color: ${theme.colors.shade40};
  }

  input {
    box-shadow: ${({ status }) => (status ? theme.colors.blue40 : theme.colors.shade40)} 0 0 0 1.2px inset;
  }
`;
export const WrapperInput = styled.input `
  width: 100%;
  min-width: 65px;
  border-radius: ${theme.spacing.space2};
  background: white;
  border: 1px solid transparent;
  box-shadow: ${({ error }) => (!error ? theme.colors.shade40 : theme.colors.red40)} 0 0 0 1.2px inset;
  color: ${theme.colors.shade80};
  ${({ variant }) => (variant ? changeSize[variant] : changeSize.medium)};
  padding-left: ${({ icon }) => icon && '40px'};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue40};
    box-shadow: 0 0 2px ${theme.colors.blue40};
  }

  &:-webkit-autofill {
    background: -internal-light-dark(black, white) !important;
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.shade05} inset;
    -webkit-text-fill-color: ${theme.colors.shade80} !important;
  }

  ::placeholder {
    color: ${theme.colors.shade40};
    font-weight: lighter;
  }
`;
export const WrapperMessage = styled.div `
  margin-top: -${theme.spacing.space2};
  margin-left: ${theme.spacing.space1};
`;
export const ContainerPoper = styled.div `
  display: ${({ status }) => !status && 'none'};
  position: absolute;
  top: 45px;
  width: 100%;
  z-index: 10;
`;
export const ValueSelector = styled.div `
  cursor: pointer;
  font-size: ${theme.fontSizes.p2};
  margin: 0;
  border-radius: ${theme.spacing.space1};
  color: ${theme.colors.shade60};
  padding: 12px ${theme.spacing.space3};
  border-bottom: 1px solid ${theme.colors.shade20};
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
    text-align: center;
    width: 20px;
    border-radius: 50%;
  }

  svg {
    margin-right: 8px;
    width: 20px;
  }

  &.selected {
    background: ${theme.colors.cyan10};
  }

  :hover {
    font-weight: bold;
    background-color: ${theme.colors.shade20};
  }
  :active {
    color: white;
    background-color: ${theme.colors.cyan20};
  }
`;
//# sourceMappingURL=styles.js.map