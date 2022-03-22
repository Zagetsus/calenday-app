import styled from 'styled-components';

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ .checkmark {
    border: 1px solid ${props => props.theme.colors.primary};
    .radio-mark{
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;

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



export const CheckMarkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckMark = styled.span`
    //display: none;
    visibility: hidden;
    opacity: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    transform: scale(0);
    transition: 100ms all ease-in;
`;
