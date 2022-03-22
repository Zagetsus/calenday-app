import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding-top: 24px;
  border-top: 1px solid #e9e9e9;
`;

export const SelectContainer = styled.div`
  width: 268px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  
`;

export const Price = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 0.005em;

  color: #414141;
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 8px;

  letter-spacing: 0.2px;

  color: #222222;
`;

export const SmallInput = styled.div`
  max-width: 173px;
  width: 100%;
  
  &:first-child {
    margin-right: 16px;
  }
`;

export const RowNotBetween = styled(Row)`
  justify-content: flex-start;
`
