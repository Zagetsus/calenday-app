import styled from "styled-components";
import {text} from "stream/consumers";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 345px;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  
  &:not(:last-child){
    margin-bottom: 18.5px;
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
  mix-blend-mode: multiply;
  margin-right: 7px;
`;

export const Text = styled(Title)`
  font-weight: 400;
  margin-right: 0;
`;

export const Day = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 58.6048px;
  line-height: 54px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;
`

export const Month = styled.p`
  text-align: center;
  font-size: 16.7442px;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`

export const Hours = styled.p`
  text-align: center;
  font-size: 29.3024px;
  letter-spacing: 0.01em;

  color: ${props => props.theme.colors.primary};

  mix-blend-mode: multiply;
`
