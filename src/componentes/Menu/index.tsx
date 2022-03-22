import React from 'react';
import {Container, Nav, NavLink, Title} from "./styles";

const Menu: React.FC = () => {
  return (
      <Container>
          <Title>Calenday</Title>
        <Nav>
            <NavLink to={'/'}>Dashboard</NavLink>
            <NavLink to={'/'}>Agendamentos</NavLink>
            <NavLink to={'/'}>Estoque</NavLink>
            <NavLink to={'/'}>Clientes</NavLink>
            <NavLink to={'/'}>Funcionários</NavLink>

        </Nav>
      </Container>
  );
};

export default Menu;
