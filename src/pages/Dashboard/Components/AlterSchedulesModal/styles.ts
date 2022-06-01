import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 596px;
  height: 583px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};
  border-radius: 16px;
  padding: 40px 49px;
`;

export const Header = styled.div`
  height: 102.92px;
  margin-bottom: 18.08px;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 125%;
  margin-bottom: 41px;

  color: ${props => props.theme.colors.primary};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
  
  > button {
    max-width: 200px;
  }
`;

export const ButtonLink = styled.button`
  display: block;
  color: ${({theme}) => theme.colors.primary};
  text-decoration: underline;
  margin: 24px auto;
  cursor: pointer;
`

export const Column = styled.div`

`
