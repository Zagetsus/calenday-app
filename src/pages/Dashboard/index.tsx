import React from 'react';
import LayoutDash from "../../componentes/LayoutDash";
import {Container} from "./styles";
import {Route, Routes} from "react-router-dom";
import Schedules from "./pages/Schedules";

const Dashboard: React.FC = () => {
  return (
      <LayoutDash>
          <Container>
              <Routes>
                  <Route path={'/agendamentos'} element={<Schedules />} />
              </Routes>
          </Container>
      </LayoutDash>
  );
};

export default Dashboard;
