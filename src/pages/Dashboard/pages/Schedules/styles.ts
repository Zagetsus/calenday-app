import styled from "styled-components";

export const InfosContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 68px;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 778px;
  
  > button {
    max-width: 200px;
  }
`;

export const SchedulesList = styled.div`
  display: flex;
  padding-bottom: 10px;
  overflow-x: auto;
  max-width: calc(100vw - 281px - 24px - 24px);
  gap: 24px;
`
