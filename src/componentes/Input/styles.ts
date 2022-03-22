import styled from "styled-components";

interface IError {
    error?: boolean
}

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.black}
`;

export const InputText = styled.input<IError>`
  width: 100%;
  height: 40px;
  background: ${props => props.theme.colors.inputBackground};
  border: ${({error, theme}) => error ? `2px solid ${theme.colors.error}` : `1px solid ${theme.colors.border}`};
  border-radius: 8px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 19px;

  color: ${props => props.theme.colors.black};
  
  &::placeholder {
    color: ${props => props.theme.colors.placeholder}
  }
  
  &:focus {
    border: ${props => props.error ? `2px solid ${props.theme.colors.error}` : `2px solid ${props.theme.colors.primary}`};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  height: 17px;
  margin-top: 8px;
`;

export const Message = styled.p<IError>`
  font-size: 14px;
  line-height: 17px;
  color: ${({error, theme}) => error ? theme.colors.error : theme.colors.black };
`;
