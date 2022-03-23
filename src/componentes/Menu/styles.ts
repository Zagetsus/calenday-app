import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  padding: 33px 24px;
  border-right: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #FF8657;
`;

export const Nav = styled.nav`
  margin-top: 100px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  margin-bottom: 16px;

  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #919191;
  border-radius: 4px;
  
  &:hover {
    background:  ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight: 700;
  }
`;
