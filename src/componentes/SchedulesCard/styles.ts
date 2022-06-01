import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  min-width: 280px;
`

export const EmployeeCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`
export const EmployeeAvatar = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: #f4f4f4;
  margin-right: 16px;
`

export const EmployeeName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 3px;
`

export const EmployeeSpecialty = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #696969;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: 948px;
  padding: 7px 4px;
  background: #F8F8F8;
  border: 1px solid #EEEEEE;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

export const Card = styled.div<{confirmed: boolean}>`
  width: 100%;
  height: 100px;
  background-color: ${ ({confirmed}) => confirmed ? '#DEF2D9' : '#FFDBDB'};
  padding: 10px;
  cursor: pointer;
`

export const ServiceName = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 11px;
  letter-spacing: 0.01em;
  margin-bottom: 8px;

  color: rgba(0, 0, 0, 0.8);
`

export const CustomerRow = styled.div`
  display: flex;
  align-items: center;
`

export const CardStrong = styled.p`

  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.01em;

  color: rgba(0, 0, 0, 0.8);
  margin-right: 6px;

  mix-blend-mode: multiply;
`

export const CardText = styled(CardStrong)`
  font-weight: 400;
  margin-right: 0;
`

export const CardHours = styled(CardStrong)`
  font-weight: 700;
  text-decoration: underline;
  margin-right: 0;
  
  &:first-child {
    margin-right: 8px;
  }
  
  &:last-child {
    margin-left: 8px;
  }
`
