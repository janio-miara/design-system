import styled from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  cursor: pointer;
  font-family: ${theme.fonts.join()};
  height: 60px;
  position: relative;

  .react-datepicker-popper {
    z-index: 4;
  }
  .react-datepicker__triangle {
    left: -30px !important;
  }

  button {
    background-color: transparent;
    border: none;
  }

  .wrapper-label {
    position: absolute;
    color: ${theme.colors.shade40};
    font-size: 13px;
    left: 14px;
    z-index: 2;
    top: -${theme.spacing.space2};
    background: white;
    padding: 0 2px;
    line-height: ${theme.spacing.space3};
    letter-spacing: 0;
    font-weight: normal;
  }

  .icon {
    position: relative;
    top: -28px;
    color: ${theme.colors.shade40};
    left: ${({ width }) => (width ? '175px' : '110px')};
    cursor: pointer;
  }
  input {
    margin: 0;
    border-radius: ${theme.spacing.space2};
    background: white;
    border: 1px solid transparent;
    box-shadow: ${theme.colors.shade40} 0 0 0 1.2px inset;
    color: ${theme.colors.shade80};
    padding: 12px;
    font-size: ${theme.fontSizes.p2};
    width: ${({ width }) => (width ? 'auto' : '120px')} !important;

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
  }
`;
//# sourceMappingURL=styles.js.map