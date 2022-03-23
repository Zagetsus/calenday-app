import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  padding-left: 266px;

  > div {
    flex: 1;
  }
`

export const Navigator = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 266px;
`

export const Main = styled.div`
  position: relative;
  padding-top: 95px;
`
