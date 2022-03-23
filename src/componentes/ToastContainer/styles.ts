import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 10px;
  bottom: 10px;
  padding: 21px;
  overflow: hidden;
  z-index: 10000;

  @media(max-width: 607px){
    width: 100%;
    right: 0;
    bottom: 0;
    padding: 0;
    top: initial;
  }
`;
