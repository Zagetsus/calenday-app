import styled from "styled-components";

interface Props {
    outline?: boolean;
    expand?: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({expand}) => expand ? '100%' : 'auto'};
  height: 48px;
  
  font-size: 14px;
  border-radius: 8px;
  background-color: ${({outline, theme}) => outline ? 'transparent' : theme.colors.primary};
  border: 2px solid ${({theme}) => theme.colors.primary};

  font-weight: bold;
  line-height: 24px;
  color: ${({outline, theme}) => outline ? theme.colors.primary : theme.colors.white};

  cursor: pointer;

  svg {
    g {
      rect {
        fill: ${({outline, theme}) => outline ? theme.colors.primary : theme.colors.white};
      }
    }
  }
  
  &:hover {
    opacity: 0.9;
  }
`;
