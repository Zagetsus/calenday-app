import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 180px;
`

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #E9E9E9;
  margin-left: 12px;
`

export const Name = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: ${props => props.theme.colors.primary};
`

export const Status = styled.p`
  font-size: 14px;
  line-height: 17px;
  text-align: right;

  color: ${props => props.theme.colors.black};
`
