import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 416px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;

export const LoginTextContainer = styled.div`
  margin-bottom: 48px;
`

export const InputField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  
  > button {
    max-width: 200px;
  }
`
