import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: fixed;
  top: 0;
  left: 266px;
  
  background-color: ${props => props.theme.colors.white};
  padding: 20px 24px;
  height: 95px;
  width: calc(100vw - 266px);
  z-index: 9;
`;

export const SearchContainer = styled.div`
  max-width: 324px;
  width: 100%;
`
