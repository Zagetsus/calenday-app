import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 125%;
  margin-bottom: 21px;
  color: ${props => props.theme.colors.text};
`

export const Subtitle = styled(Title)`
  min-width: 63px;
  font-weight: 400;
  margin-right: 27px;
  margin-bottom: 0;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InputSmall = styled.div`
  width: 180px;
`
