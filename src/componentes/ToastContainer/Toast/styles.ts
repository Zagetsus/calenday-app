import styled, {css} from 'styled-components';
import {animated} from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'warning';
}

const toastTypeVariation = {
  success: css`
    border-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.success};
  `,
  warning: css`
    border-color: ${props => props.theme.colors.warning};
    color: #919191;
  `,
  error: css`
    border-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.error};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 380px;
  position: relative;
  padding: 24px 20.5px 20px 20.5px;
  display: flex;
  align-items: center;

  border-left: 10px solid;

  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(96, 97, 112, 0.16), inset 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariation[props.type || 'success']}
  section {
    background: var(--white);
    border-radius: 20px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }

  div {
    flex: 1;

    p {
      font-family: var(--roboto);
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (max-width: 607px) {
    width: 100%;
    border-radius: 0;
    padding: 10px calc((100% - 320px) / 2);

    section {
      width: 25px;
      height: 25px;
      margin-right: 10px;

      > svg {
        width: 13px;
      }
    }
  }
`;
