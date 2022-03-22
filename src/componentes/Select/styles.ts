import styled from 'styled-components';
import {ReactComponent as ArrowDown} from "../../assets/svg/icon-arrow-down.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  width: 100%;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.text};
`;

export const Color = styled.div<{ color: string }>`
  min-width: 16px;
  height: 16px;
  margin-left: 16px;
  border-radius: 2px;
  border: 0.6px solid var(--grey-light-2);
  box-sizing: border-box;
  background: ${({color}) => color};
`;

export const SelectionContainer = styled.div<{ active: boolean, $open: boolean, $error: string; $disabled: boolean; }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 14px 8px;
  border-radius: 8px;
  background: ${({$disabled, theme}) => $disabled ? '#e9e9e9' : theme.colors.inputBackground};
  pointer-events: ${({$disabled}) => $disabled ? 'none' : 'initial'};
  border: ${({
               $open,
               $error,
               theme: {colors}
             }) => $error ? `2px solid ${colors.error}` : $open ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`};

  > span {
    color: ${({active, $disabled, theme}) => $disabled ? 'var(--grey-medium-4)' : active ? theme.colors.text : theme.colors.placeholder};
    
    font-weight: ${({$open}) => $open ? 500 : 400};
  }

  ${Color} {
    margin: 12px 8px 12px 4px;
  }
`;

export const SelectedLabel = styled.span`
  font-weight: 400;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.2px;
  margin-right: 24px;
  cursor: pointer;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const ArrowIcon = styled(ArrowDown)`
  height: 16px;
  width: 16px;
  cursor: pointer;
  
  * {
    fill: ${props => props.theme.colors.text};
  }
`;

export const DropDownContainer = styled.div<{ $open: boolean, $position: string }>`
  visibility: ${({$open}) => $open ? 'visible' : 'hidden'};
  opacity: ${({$open}) => $open ? 1 : 0};
  position: ${({$position, $open}) => $open ? $position : 'absolute'};
  top: 100%;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 151px;
  overflow: auto;
  background: ${props => props.theme.colors.inputBackground};
  transition: 200ms all ease-in;
  z-index: 800;
  margin-top: -25px;
  padding: 0 4px;
`;


export const DropDownItem = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  border-radius: 4px;
  letter-spacing: 0.2px;
  min-height: 40px;
  color: #000000;
  cursor: pointer;
  align-items: center;
  width: 100%;

  &:hover, &:active {
    background-color: #FFF6EE;
  }

  transition: 100ms all ease-in;
`;

export const DropDownText = styled.span`
  width: 100%;
  margin: 4px 16px;

  label {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export const HintContainer = styled.div<{ $show: boolean }>`
  height: 17px;
  margin-top: 8px;
  visibility: ${({$show}) => $show ? 'visible' : 'hidden'};
  opacity: ${({$show}) => $show ? 1 : 0};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 100ms all ease-in;
`;

export const HintText = styled.span<{ $error: boolean }>`
  margin: 8px 0;
  color: ${({$error}) => $error ? 'var(--red-dark)' : 'var(--grey)'};
  font-family: var(--roboto);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.2px;
`;
