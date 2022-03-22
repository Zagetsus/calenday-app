import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2<{highlight?: boolean}>`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 16px;

  color: ${({highlight, theme}) => highlight ? theme.colors.primary : theme.colors.black};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #656565;
`

export const Special = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #656565;
`;
