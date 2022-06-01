import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 180px;
  resize: none;
  
  background: ${props => props.theme.colors.inputBackground};
  border: ${({theme}) => `1px solid ${theme.colors.border}`};
  border-radius: 8px;
  padding: 16px;

  font-size: 16px;
  line-height: 19px;

  color: ${props => props.theme.colors.black};
  outline: 0;
  
  &::placeholder {
    color: ${props => props.theme.colors.placeholder}
  }
  
  &:focus {
    border: ${props => `2px solid ${props.theme.colors.primary}`};
  }
  
  &:disabled {
    background-color: ${({theme}) => theme.colors.border};
  }
`
