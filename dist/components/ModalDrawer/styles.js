import styled, { keyframes } from 'styled-components';
import { theme } from '../Themes';
export const Container = styled.div `
  display: flex;
  align-items: center;
  z-index: ${theme.zIndex.z8};
  height: 100vh;
  justify-content: center;
  position: fixed;
  inset: 0;
  overflow: hidden;
  opacity: 0;
  animation: 1s ease 0s 1 normal forwards running fadeInModal;
  background-color: rgba(0, 0, 0, 0.55);

  @keyframes fadeInModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ContainerFilter = styled.div `
  position: absolute;
  top: 0;
  right: ${props => (props.side === 'right' ? '0' : 'unset')};
  left: ${props => (props.side === 'left' ? '0' : 'unset')};
  background: white;
  width: 450px;
  height: 100%;
  box-shadow: 0px -4px 6px 1px #0000004a;
  animation: ${({ side }) => handleAnimation(side)} 1s;

  .wrapper-heading {
    display: flex;
    padding: ${theme.spacing.space3};
    height: 50px;
    background-color: ${theme.colors.blue40};
    color: ${theme.colors.white};

    h3 {
      margin: 0;
    }
  }

  .icon {
    margin-right: ${theme.spacing.space3};
    svg {
      width: ${theme.spacing.space4};
      height: ${theme.spacing.space4};
    }
  }

  .content {
    overflow: auto;
    padding: ${theme.spacing.space3};
    height: calc(100% - 170px);
    border-bottom: 1px solid ${theme.colors.blue30};
  }

  .button-wrapp {
    text-align: end;
    padding: ${theme.spacing.space3};
    button {
      margin-left: ${theme.spacing.space2};
    }
  }
`;
const handleAnimation = (side) => {
    const keyframesData = side === 'left' ? animationLeftStart : animationStart;
    return keyframes(keyframesData);
};
const animationStart = {
    from: {
        opacity: 0,
        right: -500,
    },
    to: {
        opacity: 1,
        right: 0,
    },
};
const animationLeftStart = {
    from: {
        opacity: 0,
        left: -500,
    },
    to: {
        opacity: 1,
        left: 0,
    },
};
//# sourceMappingURL=styles.js.map