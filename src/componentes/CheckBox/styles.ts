import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  

`;

export const Label = styled.span`
  margin-top: 0;
  margin-left: 28px;
`;

export const CheckBoxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ .checkmark {
    background-color: var(--purple-business);
    border: none;
    svg {
      opacity: 1;
      visibility: visible;
      *{
        fill: var(--white);
      }
    }
  }
`;

export const CheckMarkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: var(--white);
  border: 1px solid var(--disabled-light);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckMark = styled.div`
    opacity: 0;
    visibility: hidden;
    width: 8px;
    height: 8px;
    transition: 100ms all ease-in;
`;
